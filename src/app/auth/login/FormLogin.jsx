import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function FormLogin() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [validate, setValidate] = useState({
    error: false,
    message: "",
  });
  const showPw = () => {
    let x = document.getElementById("pwInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const router = useRouter();
  const handleLogin = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `http://localhost:8000/api/v1/auth/login`,
      data: loginData,
    })
      .then((result) => {
        localStorage.setItem("@login", JSON.stringify(result.data.data));
        alert(result.data.message);
        router.push("/dashboard");
      })
      .catch((err) => {
        setValidate({ error: true, message: err?.response?.data?.message });
      });
  };
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const isLogged = JSON.parse(localStorage.getItem("@login"));
    if (isLogged) {
      router.push("/dashboard");
    }
  }
  return (
    <form onSubmit={handleLogin} action="" className="flex flex-col gap-2">
      <div className="flex gap-2 items-center h-14 border-b-[#A9A9A999] border-b-[1px] bg-transparent mb-3">
        <Image src="/images/mail.png" alt="email" width={30} height={30} />
        <input
          onChange={(e) => {
            setLoginData({
              ...loginData,
              email: e.target.value,
            });
          }}
          type="email"
          placeholder="Enter your e-mail"
          className=" focus:outline-none bg-transparent w-full h-full"
        />
      </div>
      <div className="flex gap-2 items-center h-14 border-b-[#A9A9A999] border-b-[1px] bg-transparent">
        <Image src="/images/lock.png" alt="password" width={30} height={30} />
        <input
          onChange={(e) => {
            setLoginData({
              ...loginData,
              password: e.target.value,
            });
          }}
          type="password"
          placeholder="Enter your password"
          className=" focus:outline-none bg-transparent w-full h-full"
          id="pwInput"
        />
        <Image
          src="/images/illuminati.png"
          alt="illuminati-eye"
          onClick={showPw}
          className="cursor-pointer"
          width={20}
          height={20}
        />
      </div>
      <button className="text-[#3A3D42CC] self-end font-semibold mb-10">
        Forgot password?
      </button>
      {validate.error && (
        <div className="p-5 w-full text-red-500 bg-red-200 rounded-md font-bold italic duration-200">
          {validate.message}
        </div>
      )}
      <button
        type="submit"
        className="py-4 w-full text-[#88888F] bg-[#dadada] rounded-md mb-3 font-bold hover:bg-[#6379F4] hover:text-white duration-200"
      >
        Login
      </button>
      <p className="text-center">
        Don’t have an account? Let’s{" "}
        <Link href={"/auth/signup"}>
          <span className="text-[#6379F4] font-bold">Sign Up</span>
        </Link>
      </p>
    </form>
  );
}

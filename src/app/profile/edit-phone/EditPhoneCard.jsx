import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EditPhoneCard() {
  const router = useRouter();
  const [phone, setPhone] = useState({
    phone: "",
  });
  const handleEditPhone = (event) => {
    event.preventDefault();
    const id = JSON.parse(localStorage.getItem("@login"))?.user.id;
    axios({
      method: "PATCH",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/edit-phone/${id}`,
      data: phone,
    })
      .then((result) => {
        alert(result.data.message);
        router.refresh();
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
      });
  };
  return (
    <div className="h-[80%] md:w-full md:h-full bg-white rounded-xl shadow-xl flex flex-col p-10 gap-6 max-sm:mt-28">
      <p className="text-xl text-[#3A3D42] font-bold">Edit Phone Number</p>
      <p className="text-[#7A7886] mb-10 md:w-1/2">
        Add at least one phone number for the transfer ID so you can start
        transfering your money to another user.
      </p>
      <form
        onSubmit={handleEditPhone}
        action=""
        className="md:w-[400px] md:h-80 self-center flex flex-col items-center justify-center gap-10 "
      >
        <div className="input-phone flex items-center w-full h-12 border-b-[2px] border-b-[#A9A9A999] gap-2">
          <div className="flex items-center justify-center  w-8 h-full">
            <Image src={require("../../../assets/img/edit-phone.png")} alt="" />
          </div>
          <input
            onChange={(e) => {
              // console.log(e.target.value);
              setPhone({
                ...phone,
                phone: e.target.value,
              });
            }}
            type="text"
            className="w-[90%] h-full bg-transparent placeholder:text-[#A9A9A9CC] focus:outline-none"
            placeholder="Enter your phone number"
          />
        </div>
        <button
          type="submit"
          className="bg-[#e6e7e9] text-[#4D4B57] hover:text-white py-5 md:w-[400px] rounded-lg flex justify-between px-5 hover:bg-[#6379F4] duration-200"
        >
          <p className="font-semibold text-center w-full">
            Enter your phone number
          </p>
        </button>
      </form>
      <Link href={`/dashboard`} className="flex justify-end">
        <button className="bg-[#6379F4] self-end md:w-48 w-36 text-lg py-3 font-semibold rounded-xl text-white border-[2px] border-[#6379F4] hover:text-[#6379F4] hover:bg-white duration-200">
          Back to Home
        </button>
      </Link>
    </div>
  );
}

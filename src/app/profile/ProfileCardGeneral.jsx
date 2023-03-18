"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import EditAvatarModal from "./EditAvatarModal";

export default function ProfileCardGeneral() {
  const [showModal, setShowModal] = useState(false);
  const [dataUser, setDataUser] = useState({});
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("@login"))?.user.id;
    axios
      .get(`http://localhost:8000/api/v1/users/${id}`)
      .then((result) => {
        setDataUser(result?.data?.data);
        setRefetch(!refetch);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refetch]);
  const router = useRouter();
  return (
    <>
      <div className="w-full md:w-full md:h-full bg-white rounded-xl shadow-xl flex flex-col justify-center items-center max-sm:mt-28">
        <form
          className="flex flex-col items-center justify-center gap-1 md:mb-5 cursor-pointer mb-2"
          action=""
        >
          <label
            onClick={() => setShowModal(true)}
            className="label-avatar flex flex-col items-center justify-center gap-1"
            htmlFor="upload-photo"
          >
            <div className="h-16 w-16 flex items-center justify-center">
              <Image
                src={
                  dataUser?.avatar
                    ? `http://localhost:8000/uploads/images/${dataUser.avatar}`
                    : `http://localhost:3000/images/default-avatar.jpg`
                }
                width={62}
                height={62}
                className="rounded-full hover:border-[6px] hover:border-[#6379F4] duration-200"
                alt={
                  dataUser?.first_name ? dataUser?.first_name : "profile avatar"
                }
              />
            </div>
            <div className="flex items-center gap-1">
              <Image src={require("../../assets/img/edit.png")} alt="edit" />
              <p className="text-[#7A7886]">Edit</p>
            </div>
          </label>
          <input name="photo" id="upload-photo" />
        </form>
        <h3 className="text-xl text-[#4D4B57] font-bold text-center md:mb-2">
          {dataUser?.first_name} {dataUser?.last_name}
        </h3>
        <p className="md:mb-8 text-[#7A7886] text-center mb-5">
          {dataUser?.phone ? dataUser?.phone : "Empty phone number"}
        </p>
        <div className="button-nav flex flex-col gap-3">
          <Link href={"/profile/personal-info"}>
            <button className="bg-[#e6e7e9] text-[#4D4B57] hover:text-white py-5 md:w-[400px] w-[300px] rounded-lg flex justify-between px-5 hover:bg-[#6379F4] duration-200">
              <p className="font-semibold">Personal Information</p>
              <Image
                src={require("../../assets/img/arrow-right-2.png")}
                alt=""
              />
            </button>
          </Link>
          <Link href={"/profile/change-password"}>
            <button className="bg-[#e6e7e9] text-[#4D4B57] hover:text-white py-5 md:w-[400px] w-[300px] rounded-lg flex justify-between px-5 hover:bg-[#6379F4] duration-200">
              <p className="font-semibold">Change Password</p>
              <Image
                src={require("../../assets/img/arrow-right-2.png")}
                alt=""
              />
            </button>
          </Link>
          <Link href={"/profile/change-pin"}>
            <button className="bg-[#e6e7e9] text-[#4D4B57] hover:text-white py-5 md:w-[400px] w-[300px] rounded-lg flex justify-between px-5 hover:bg-[#6379F4] duration-200">
              <p className="font-semibold">Change PIN</p>
              <Image
                src={require("../../assets/img/arrow-right-2.png")}
                alt=""
              />
            </button>
          </Link>
          <button
            onClick={() => {
              alert(`You are logged out! See you soon 😊`);
              localStorage.removeItem("@login");
              router.push("/auth/login");
            }}
            className="bg-[#e6e7e9] text-[#4D4B57] hover:text-white py-5 md:w-[400px] w-[300px] rounded-lg flex justify-between px-5 hover:bg-[#6379F4] duration-200"
          >
            <p className="font-semibold">Logout</p>
          </button>
        </div>
      </div>
      <EditAvatarModal
        isVisible={showModal}
        closeModal={() => setShowModal(false)}
        dataUser={dataUser}
      />
    </>
  );
}

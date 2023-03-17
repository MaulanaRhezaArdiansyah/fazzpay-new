"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Image from "next/image";
import NotifModal from "./NotifModal";
import DropdownProfile from "./DropdownProfile";

export default function HeaderLogged() {
  //   if (typeof window !== "undefined") {
  // const id = JSON.parse(localStorage?.getItem("@login"))?.user.id;
  //   }
  const [dataUser, setDataUser] = useState({});
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    const id = JSON.parse(localStorage?.getItem("@login"))?.user.id;
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
  const [showModal, setShowModal] = useState(false);
  const [showModalNotif, setShowModalNotif] = useState(false);
  // console.log(dataUser);
  return (
    <>
      <header className="logged flex justify-between w-full h-20 sm:h-28 items-center rounded-br-md rounded-bl-md shadow-xl bg-white/90 backdrop-blur-sm fixed top-0 left-0 px-3 md:px-32">
        <Logo />
        <div className="account-nav flex h-16 items-center gap-6 max-sm:gap-2 max-sm:flex-row-reverse">
          <div
            onClick={() => setShowModal(true)}
            className="h-14 w-14 rounded-full hover:border-[6px] hover:border-[#6379F4] duration-200 cursor-pointer"
          >
            {/* <Image
              src={
                dataUser[0]?.avatar
                  ? `http://localhost:8000/uploads/images/${dataUser[0]?.avatar}`
                  : `/images/default-avatar.jpg`
              }
              alt="avatar"
              width={30}
              height={30}
            /> */}
            <img
              src={
                dataUser?.avatar
                  ? `http://localhost:8000/uploads/images/${dataUser.avatar}`
                  : `http://localhost:3000/images/default-avatar.jpg`
              }
              alt=""
              className="w-full h-full rounded-full"
              title={`${dataUser?.first_name}`}
            />
          </div>
          <div className="flex flex-col justify-center max-sm:hidden">
            <p className="text-xl text-[#3A3D42] font-bold">
              {dataUser?.first_name} {dataUser?.last_name}
            </p>
            <p className="text-[#3A3D42E5]">
              {dataUser?.phone ? dataUser?.phone : "(empty phone number)"}
            </p>
          </div>
          <button
            onClick={() => {
              setShowModalNotif(true);
            }}
            className="flex items-center max-sm:h-14 max-sm:w-14 justify-center cursor-pointer"
            title="notification"
          >
            <Image
              src="/images/bell.png"
              alt="bell-notif"
              width={24}
              height={24}
            />
          </button>
        </div>
      </header>
      <NotifModal
        isVisible={showModalNotif}
        closeModal={() => setShowModalNotif(false)}
      />
      <DropdownProfile
        isVisible={showModal}
        closeModal={() => setShowModal(false)}
      />
    </>
  );
}

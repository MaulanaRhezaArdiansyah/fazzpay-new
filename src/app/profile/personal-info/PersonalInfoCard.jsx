import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function PersonalInfoCard() {
  const [userDetail, setUserDetail] = useState({});
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("@login"))?.user.id;
    axios
      .get(`http://localhost:8000/api/v1/users/${id}`)
      .then((result) => {
        setUserDetail(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(userDetail);
  return (
    <div className="md:w-full h-[80%] md:h-full bg-white rounded-xl shadow-xl flex flex-col p-10 gap-6 max-sm:mt-28">
      <p className="text-xl text-[#3A3D42] font-bold">Personal Information</p>
      <p className="text-[#7A7886] mb-5 md:w-1/2">
        We got your personal information from the sign up proccess. If you want
        to make changes on your information, contact our support.
      </p>
      <div className="details-container flex flex-col w-full">
        <div className="receiver-card bg-white w-full h-28 rounded-xl shadow-lg flex p-5 mb-5 flex-col justify-center gap-1">
          <p className="text-[#7A7886]">First Name</p>
          <p className="text-[#514F5B] text-xl font-bold">
            {userDetail?.first_name}
          </p>
        </div>
        <div className="receiver-card bg-white w-full h-28 rounded-xl shadow-lg flex p-5 mb-5 flex-col justify-center gap-1">
          <p className="text-[#7A7886]">Last Name</p>
          <p className="text-[#514F5B] text-xl font-bold">
            {userDetail?.last_name}
          </p>
        </div>
        <div className="receiver-card bg-white w-full h-28 rounded-xl shadow-lg flex p-5 mb-5 flex-col justify-center gap-1">
          <p className="text-[#7A7886]">Verified E-mail</p>
          <p className="text-[#7A7886] text-xl font-bold">
            {userDetail?.email}
          </p>
        </div>
        <div className="receiver-card bg-white w-full h-28 rounded-xl shadow-lg flex p-5 mb-5 justify-between items-center gap-1">
          <div className="flex flex-col">
            <p className="text-[#7A7886]">Phone Number</p>
            <p className="text-[#514F5B] text-xl font-bold">
              {userDetail?.phone ? userDetail.phone : "(Empty phone number)"}
            </p>
          </div>
          <Link href={"/profile/edit-phone"}>
            <button className="text-[#6379F4]">Manage</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

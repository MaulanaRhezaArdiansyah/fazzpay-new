import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function StatusFailed() {
  const segment = usePathname();
  const router = useRouter();
  const id = segment.split("/")[3];
  const [userDetail, setUserDetail] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/users/${id}`)
      .then((result) => {
        setUserDetail(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="md:w-full md:h-full bg-white rounded-xl shadow-xl flex flex-col p-10 gap-6">
      <div className="transfer-status w-full h-52 flex flex-col items-center justify-center gap-6">
        <Image src="/images/failed.png" alt="failed" width={40} height={40} />
        <p className="text-[#514F5B] text-2xl font-bold text-center">
          Transfer Failed
        </p>
      </div>
      <div className="details-container flex flex-col w-full">
        <div className="receiver-card bg-white w-full h-28 rounded-xl shadow-lg flex p-5 mb-5 flex-col justify-center gap-1">
          <p className="text-[#7A7886]">Amount</p>
          <p className="text-[#514F5B] text-2xl font-bold">Rp100.000</p>
        </div>
        <div className="receiver-card bg-white w-full h-28 rounded-xl shadow-lg flex p-5 mb-5 flex-col justify-center gap-1">
          <p className="text-[#7A7886]">Balance Left</p>
          <p className="text-[#514F5B] text-2xl font-bold">Rp20.000</p>
        </div>
        <div className="receiver-card bg-white w-full h-28 rounded-xl shadow-lg flex p-5 mb-5 flex-col justify-center gap-1">
          <p className="text-[#7A7886]">Date & Time</p>
          <p className="text-[#514F5B] text-2xl font-bold">
            May 11, 2020 - 12.20
          </p>
        </div>
        <div className="receiver-card bg-white w-full h-28 rounded-xl shadow-lg flex p-5 mb-5 flex-col justify-center gap-1">
          <p className="text-[#7A7886]">Notes</p>
          <p className="text-[#514F5B] text-2xl font-bold">
            For buying some socks
          </p>
        </div>
      </div>
      <p className="text-xl text-[#3A3D42] font-bold">Transfer To</p>
      <div className="receiver-card bg-white w-full h-28 rounded-xl shadow-lg flex p-5 mb-5">
        <div className="flex items-center h-full w-full ">
          <div className="w-14 h-14 flex justify-center items-center mr-3">
            <Image
              src={
                userDetail.avatar
                  ? `http://localhost:8000/uploads/images/${userDetail?.avatar}`
                  : `http://localhost:3000/images/default-avatar.jpg`
              }
              className="rounded-full"
              width={62}
              height={62}
              alt={
                userDetail?.first_name
                  ? userDetail?.first_name
                  : "profile avatar"
              }
            />
          </div>
          <div>
            <p className="text-[#4D4B57] text-xl font-bold">
              {userDetail.first_name} {userDetail.last_name}
            </p>
            <p className="text-[#7A7886]">
              {userDetail.phone ? userDetail.phone : "(empty phone number)"}
            </p>
          </div>
        </div>
      </div>
      <div className="button w-full md:h-56  flex justify-end items-end gap-5">
        <button
          //   onClick={() => router.back()}
          onClick={() => router.push(`/transfer/${id}`)}
          className="bg-[#6379F4] self-end md:w-48 w-36 text-lg py-3 font-semibold rounded-xl text-white border-[2px] border-[#6379F4] hover:text-[#6379F4] hover:bg-white duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

import axios from "axios";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ConfirmCard() {
  const segment = usePathname();
  const router = useRouter();
  const id = segment.split("/")[3];
  const [userDetail, setUserDetail] = useState({});
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${id}`)
      .then((result) => {
        setUserDetail(result?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const [senderDetail, setSenderDetail] = useState({});
  useEffect(() => {
    const idSender = JSON.parse(localStorage.getItem("@login"))?.user.id;
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${idSender}`)
      .then((result) => {
        setSenderDetail(result?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const balanceBefore = parseInt(senderDetail?.balance);

  if (typeof window !== "undefined") {
    var amountData = parseInt(localStorage.getItem("@amount"));
  }

  const balanceLeft = balanceBefore - amountData;

  const [amountConfirm, setAmountConfirm] = useState({
    amount: amountData,
  });

  const handleTransfer = (event) => {
    event.preventDefault();
    const idSender = JSON.parse(localStorage.getItem("@login"))?.user.id;
    axios({
      method: "PATCH",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/transfer/${id}/${idSender}`,
      data: amountConfirm,
    })
      .then((result) => {
        // console.log(result.data);
        localStorage.setItem("@amountConfirm", amountConfirm.amount);
        localStorage.removeItem("@amount");
        // alert(result.data.message);
        router.push(`/transfer/status/${id}`);
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        alert(err.response.data.message);
        router.back();
      });
  };

  const numberWithCommas = (num) => {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <form
      onSubmit={handleTransfer}
      className="h-[90%] md:w-full md:h-full bg-white rounded-xl shadow-xl flex flex-col p-10 gap-6 max-sm:mt-10"
    >
      <p className="text-xl text-[#3A3D42] font-bold">Transfer To</p>
      <div className="receiver-card bg-white w-full h-28 rounded-xl shadow-lg flex p-5 mb-5">
        <div className="flex items-center h-full w-full ">
          <div className="w-14 h-14 flex justify-center items-center mr-3">
            <Image
              src={
                userDetail.avatar
                  ? `${process.env.NEXT_PUBLIC_API_URL}/uploads/images/${userDetail?.avatar}`
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
      <p className="text-xl text-[#3A3D42] font-bold">Details</p>
      <div className="details-container flex flex-col w-full">
        <div className="receiver-card bg-white w-full h-28 rounded-xl shadow-lg flex p-5 mb-5 flex-col justify-center gap-1">
          <p className="text-[#7A7886]">Amount</p>
          <p className="text-[#514F5B] text-2xl font-bold">
            Rp {numberWithCommas(amountData)}
          </p>
        </div>
        <div className="receiver-card bg-white w-full h-28 rounded-xl shadow-lg flex p-5 mb-5 flex-col justify-center gap-1">
          <p className="text-[#7A7886]">Balance Left</p>
          <p className="text-[#514F5B] text-2xl font-bold">
            Rp {numberWithCommas(balanceLeft)}
          </p>
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
      <div className="flex w-full md:h-[10rem] justify-end items-end">
        {/* <button
            onClick={() => alert("Transfer success!")}
            //   type="submit"
            className="bg-[#6379F4] self-end md:w-40 w-32 text-lg py-3 font-semibold rounded-xl text-white border-[2px] border-[#6379F4] hover:text-[#6379F4] hover:bg-white duration-200"
          >
            Continue
          </button> */}
        {/* <Link href={`/transfer/status/${id}`}> */}
        <button
          // onClick={() => alert("Please wait!")}
          type="submit"
          className="bg-[#6379F4] self-end md:w-40 w-32 text-lg py-3 font-semibold rounded-xl text-white border-[2px] border-[#6379F4] hover:text-[#6379F4] hover:bg-white duration-200"
        >
          Confirm
        </button>
        {/* </Link> */}
      </div>
    </form>
  );
}

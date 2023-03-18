import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function TransferToCard() {
  const segment = usePathname();
  const router = useRouter();
  const id = segment.split("/")[2];
  const [userDetail, setUserDetail] = useState({});
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${id}`)
      .then((result) => {
        setUserDetail(result?.data?.data);
        setRefetch(!refetch);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refetch, id]);
  const [userLoginData, setUserLoginData] = useState({});
  useEffect(() => {
    const userLoginID = JSON.parse(localStorage.getItem("@login"))?.user.id;
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${userLoginID}`)
      .then((result) => {
        setUserLoginData(result?.data?.data);
        setRefetch(!refetch);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refetch]);

  const [amount, setAmount] = useState(0);
  const sendAmountData = (event) => {
    event.preventDefault();
    const amountInput = amount;
    const userLoginBalance = parseInt(userLoginData?.balance);

    if (amountInput > userLoginBalance) {
      alert("Your balance is not enough! Please try again!");
      router.refresh();
    } else {
      localStorage.setItem("@amount", amountInput);
      router.push(`/transfer/confirm/${userDetail.id}`);
    }
  };

  return (
    <form
      onSubmit={sendAmountData}
      className="h-[80%] md:w-full md:h-full bg-white rounded-xl shadow-xl max-sm:mt-10 flex flex-col p-10 gap-6"
    >
      <p className="text-xl text-[#3A3D42] font-bold">Transfer Money</p>
      <div className="receiver-card bg-white w-full h-28 rounded-xl shadow-lg flex p-5 mb-5">
        <div className="flex items-center h-full w-full ">
          <div className="w-20 h-16 sm:h-14 sm:w-14 flex justify-center items-center mr-3">
            <img
              src={
                userDetail.avatar
                  ? `${process.env.NEXT_PUBLIC_API_URL}/images/${userDetail?.avatar}`
                  : `http://localhost:3000/images/default-avatar.jpg`
              }
              alt={
                userDetail?.first_name
                  ? userDetail?.first_name
                  : "profile avatar"
              }
              className="rounded-full w-full h-full cursor-pointer hover:border-[6px] hover:border-[#6379F4] duration-200"
            />
            {/* <Image
              src={
                userDetail.avatar
                  ? `${process.env.NEXT_PUBLIC_API_URL}/images/${userDetail?.avatar}`
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
            /> */}
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
      <p className="text-[#7A7886] md:w-[60%] ">
        Type the amount you want to transfer and then press continue to the next
        steps.
      </p>
      <div className="input-amount-container md:w-80 md:h-72 self-center flex flex-col items-center justify-center gap-8">
        <input
          type="text"
          onChange={(e) => {
            setAmount(parseInt(e.target.value));
          }}
          placeholder="10000"
          className="text-5xl text-center placeholder:text-[#B5BDCC] bg-transparent w-full focus:outline-none text-[#6379F4]"
        />
        <p className="text-[#3A3D42] text-center font-bold">
          Rp{userLoginData?.balance} Available
        </p>
        <div className="notes flex items-center w-full h-12 border-b-[2px] border-b-[#A9A9A999]  gap-2">
          <div className="flex items-center justify-center  w-8 h-full">
            <Image
              src="/images/edit-transfer.png"
              alt=""
              width={18}
              height={18}
            />
          </div>
          <input
            type="text"
            className="w-[90%] h-full bg-transparent placeholder:text-[#A9A9A9CC] focus:outline-none "
            placeholder="Add some notes"
          />
        </div>
      </div>
      <button
        type="submit"
        onClick={() => {
          // sendAmountData();
          // router.push(`/transfer/confirm/${userDetail.id}`);
        }}
        className="bg-[#6379F4] self-end justify-self-end md:w-40 w-32 text-lg py-3 font-semibold rounded-xl text-white border-[2px] border-[#6379F4] hover:text-[#6379F4] hover:bg-white duration-200"
      >
        Continue
      </button>
    </form>
  );
}

import Link from "next/link";
import React, { useEffect, useState } from "react";
import TopupModal from "../components/TopupModal";
import Image from "next/image";
import axios from "axios";

export default function BalanceCard() {
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
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  return (
    <>
      <div className="top shadow-lg flex w-full h-40 md:h-1/4 rounded-xl bg-[#6379F4] justify-between items-center p-3 md:p-12 md:px-8">
        <div className="text flex flex-col gap-5">
          <p className="text-[#E0E0E0]">Balance</p>
          <p className="text-white text-4xl">
            Rp {dataUser?.balance ? numberWithCommas(dataUser.balance) : "0"}
          </p>
          <p className="text-[#DFDCDC]">
            {dataUser?.phone ? dataUser.phone : "(empty phone number)"}
          </p>
        </div>
        <div className="button flex flex-col gap-3 text-white">
          <Link href={"/transfer"} title="transfer">
            <button className="flex gap-2 items-center justify-center w-32 sm:w-36 py-3 rounded-xl border-[2px] border-white bg-[#9aa6eb] hover:bg-[#8092f7] duration-200">
              <Image
                src="/images/arrow-up.svg"
                alt="transfer"
                width={24}
                height={24}
                title="transfer"
              />
              <p>Transfer</p>
            </button>
          </Link>
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="flex gap-2 items-center justify-center w-32 sm:w-36 py-3 rounded-xl border-[2px] border-white bg-[#9aa6eb] hover:bg-[#8092f7] duration-200"
            title="topup"
          >
            {/* <Image src={require("../../../assets/img/plus.svg")} alt="" /> */}
            <Image
              src="/images/plus.svg"
              alt="topup"
              width={24}
              height={24}
              title="topup"
            />
            <p>Top Up</p>
          </button>
        </div>
      </div>
      <TopupModal
        isVisible={showModal}
        closeModal={() => setShowModal(false)}
      />
    </>
  );
}

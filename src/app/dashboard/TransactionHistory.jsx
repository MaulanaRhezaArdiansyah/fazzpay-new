import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function TransactionHistory() {
  const router = useRouter();
  return (
    <div className="transaction-history bg-white rounded-xl md:h-full md:w-2/5 shadow-lg flex flex-col md:p-5 p-3">
      <div className="w-full  md:h-[10%] flex justify-between items-center mb-3">
        <p className="text-[#3A3D42] text-xl font-bold">Transaction History</p>
        <Link href={"/history"}>
          <button
            onClick={() => router.push("/history")}
            className="text-[#6379F4] hover:text-[#2541df] duration-200"
          >
            See all
          </button>
        </Link>
      </div>
      <div className="transaction-list-container w-full  md:h-[90%] overflow-y-scroll">
        <div className="transaction-list  w-full h-24 md:h-28 flex items-center justify-between mb-1">
          <div className="flex items-center">
            <div className="w-14 h-14 flex justify-center items-center mr-2">
              <Image
                src="/images/foto-profil-2.jpeg"
                alt="profile"
                className="w-full h-full rounded-full"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="text-[#4D4B57] text-lg font-bold">Samuel Suhi</p>
              <p className="text-[#7A7886]">Accept</p>
            </div>
          </div>
          <p className="font-bold text-[#1EC15F]">+Rp50.000</p>
        </div>
        <div className="transaction-list   w-full h-24 md:h-28 flex items-center justify-between mb-1">
          <div className="flex items-center">
            <div className="w-14 h-14 flex justify-center items-center mr-2">
              <Image
                src="/images/foto-profil-2.jpeg"
                alt="profile"
                className="w-full h-full rounded-full"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="text-[#4D4B57] text-lg font-bold">Amazon</p>
              <p className="text-[#7A7886]">Transfer</p>
            </div>
          </div>
          <p className="font-bold text-[#FF5B37]">-Rp50.000</p>
        </div>
        <div className="transaction-list   w-full h-24 md:h-28 flex items-center justify-between mb-1">
          <div className="flex items-center">
            <div className="w-14 h-14 flex justify-center items-center mr-2">
              <Image
                src="/images/foto-profil-2.jpeg"
                alt="profile"
                className="w-full h-full rounded-full"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="text-[#4D4B57] text-lg font-bold">Saya sendiri</p>
              <p className="text-[#7A7886]">Top Up</p>
            </div>
          </div>
          <p className="font-bold text-[#1EC15F]">+Rp120.000</p>
        </div>
      </div>
    </div>
  );
}

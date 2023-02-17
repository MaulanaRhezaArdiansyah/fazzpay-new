import React from "react";
import Image from "next/image";

export default function ChartCard() {
  return (
    <div className="left bg-white rounded-xl h-[30rem] md:h-full md:w-3/5 shadow-xl flex flex-col p-3 sm:p-5 justify-between">
      <div className="arrow-up-down flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <Image
            src="/images/arrow-chart-green.png"
            alt=""
            width={24}
            height={24}
          />
          <p className="text-[#6A6A6A]">Income</p>
          <p className="text-[#3A3D42] text-xl font-bold">Rp2.120.000</p>
        </div>
        <div className="flex flex-col gap-3">
          <Image
            src="/images/arrow-chart-red.png"
            alt=""
            width={24}
            height={24}
          />
          <p className="text-[#6A6A6A]">Expense</p>
          <p className="text-[#3A3D42] text-xl font-bold">Rp2.120.000</p>
        </div>
      </div>
      <div className="chart-grafik-container flex w-full md:h-[70%] gap-10 justify-center relative ">
        <div className="flex flex-col h-full justify-end gap-2">
          <div className="bg-[#6379F4] w-5 h-[80%] rounded-xl"></div>
          <p className="text-[#8F8F8F]">Sat</p>
        </div>
        <div className="flex flex-col h-full justify-end gap-2">
          <div className="bg-[#6379F4] w-5 h-[40%] rounded-xl"></div>
          <p className="text-[#8F8F8F]">Sun</p>
        </div>
        <div className="flex flex-col h-full justify-end gap-2">
          <div className="bg-[#6379F4] w-5 h-[50%] rounded-xl"></div>
          <p className="text-[#8F8F8F]">Mon</p>
        </div>
        <div className="flex flex-col h-full justify-end gap-2">
          <div className="bg-white w-28 h-8 absolute rounded-md shadow-xl md:bottom-[16rem] md:right-[10rem] flex justify-center items-center">
            <p className="text-[#1EC15F] ">+Rp65.000</p>
          </div>
          <div className="bg-[#6379F4] w-5 h-[60%] rounded-xl"></div>
          <p className="text-[#8F8F8F]">Tue</p>
        </div>
        <div className="flex flex-col h-full justify-end gap-2">
          <div className="bg-[#6379F4] w-5 h-[45%] rounded-xl"></div>
          <p className="text-[#8F8F8F]">Wed</p>
        </div>
        <div className="flex flex-col h-full justify-end gap-2">
          <div className="bg-[#6379F4] w-5 h-[75%] rounded-xl"></div>
          <p className="text-[#8F8F8F]">Thu</p>
        </div>
        <div className="flex flex-col h-full justify-end gap-2">
          <div className="bg-[#6379F4] w-5 h-[55%] rounded-xl"></div>
          <p className="text-[#8F8F8F]">Fri</p>
        </div>
      </div>
    </div>
  );
}

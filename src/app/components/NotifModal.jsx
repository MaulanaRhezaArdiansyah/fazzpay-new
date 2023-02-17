import React from "react";
import Image from "next/image";
export default function NotifModal({ isVisible, closeModal }) {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      closeModal();
    }
  };
  return (
    <div
      id="wrapper"
      onClick={handleClose}
      className="fixed inset-0 bg-transparent flex justify-end"
    >
      <div className="notif-container md:w-[400px] w-[90%] h-[70%] md:h-[450px] bg-white rounded-xl shadow-lg flex flex-col md:p-5 md:pt-20 p-5 gap-5 md:gap-5 justify-center overflow-y-scroll absolute top-32 right-32 max-sm:right-2">
        <div className="notif-card bg-white shadow-xl rounded-xl w-full h-32 flex justify-start items-center md:p-5 p-3 gap-2">
          <div className="flex items-center justify-center">
            <Image
              src="/images/arrow-accept.png"
              alt="accept-transfer"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#7A7A7A]">Accept from Joshua Lee</p>
            <p className="text-[#43484F] text-xl font-bold">Rp220.000</p>
          </div>
        </div>
        <div className="notif-card bg-white shadow-xl rounded-xl w-full h-32 flex justify-start items-center md:p-5 p-3 gap-2">
          <div className="flex items-center justify-center">
            <Image
              src="/images/arrow-accept.png"
              alt="accept-transfer"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#7A7A7A]">Accept from Joshua Lee</p>
            <p className="text-[#43484F] text-xl font-bold">Rp220.000</p>
          </div>
        </div>
        <div className="notif-card bg-white shadow-xl rounded-xl w-full h-32 flex justify-start items-center md:p-5 p-3 gap-2">
          <div className="flex items-center justify-center">
            <Image
              src="/images/arrow-transfer.png"
              alt="transfer"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#7A7A7A]">Transfer to Elon Musk</p>
            <p className="text-[#43484F] text-xl font-bold">Rp220.000</p>
          </div>
        </div>
        <div className="notif-card bg-white shadow-xl rounded-xl w-full h-32 flex justify-start items-center md:p-5 p-3 gap-2">
          <div className="flex items-center justify-center">
            <Image
              src="/images/arrow-accept.png"
              alt="accept-transfer"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#7A7A7A]">Accept from Joshua Lee</p>
            <p className="text-[#43484F] text-xl font-bold">Rp220.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import React from "react";

export default function FilterHistory({ isVisible, closeModal }) {
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
      <div className="notif-container w-[300px] h-[150px] flex flex-col justify-center overflow-y-scroll absolute top-[17rem] right-12 sm:right-36 items-center">
        <div className="w-full h-full rounded-xl bg-[#f0f0f0] md:p-5 flex flex-col justify-center">
          <button className="border-b-[1px] border-[#e0dfdf] py-2 hover:bg-[#d4d4d4] rounded-xl duration-200">
            Filter by Name
          </button>
          <button className="border-b-[1px] border-[#e0dfdf] py-2 hover:bg-[#d4d4d4] rounded-xl duration-200">
            Filter by Income
          </button>
          <button className="py-2 hover:bg-[#d4d4d4] rounded-xl duration-200">
            Filter by Expense
          </button>
        </div>
      </div>
    </div>
  );
}

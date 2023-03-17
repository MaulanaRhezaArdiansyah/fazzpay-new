"use client";
import React, { useState } from "react";
// import Image from "next/image";
// import axios from "axios";
// import { useRouter } from "next/navigation";
export default function EditAvatarModal({ isVisible, closeModal }) {
  if (!isVisible) {
    return null;
  }
  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      closeModal();
    }
  };
  return (
    <div
      onClick={handleClose}
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-20"
    >
      <form
        // onSubmit={handleTopUp}
        className="topup-form md:w-[500px] w-[80%] max-sm:w-[90%] h-[70%] md:h-[400px] bg-white rounded-xl shadow-lg flex flex-col md:p-10 p-10 gap-5 md:gap-5 justify-center z-30"
      >
        <button
          //   onClick={() => {}}
          type="submit"
          className="bg-[#6379F4] self-end md:w-40 w-32 text-lg py-3 font-semibold rounded-xl text-white border-[2px] border-[#6379F4] hover:text-[#6379F4] hover:bg-white duration-200"
        >
          Save
        </button>
      </form>
    </div>
  );
}

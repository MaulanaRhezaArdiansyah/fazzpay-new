import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import TopupModal from "./TopupModal";

export default function DropdownProfile({ isVisible, closeModal }) {
  const [showModal, setShowModal] = useState(false);
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("@login"))?.user.id;
    axios
      .get(`http://localhost:8000/api/v1/users/${id}`)
      .then((result) => {
        setDataUser(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const router = useRouter();
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      closeModal();
    }
  };
  return (
    <>
      <div
        id="wrapper"
        onClick={handleClose}
        className="fixed inset-0 bg-transparent flex justify-end"
      >
        <div className="notif-container md:w-[400px] w-[90%] h-[70%] md:h-[450px] bg-white rounded-xl shadow-lg flex flex-col md:p-5 p-5 justify-center overflow-y-scroll absolute top-32 right-32 max-sm:right-2 items-center">
          <h3 className="text-3xl text-center font-bold text-[#3A3D42] mb-2">
            {dataUser[0]?.first_name} {dataUser[0]?.last_name}
          </h3>
          <p className="text-[#3A3D42E5] text-lg mb-10">
            {dataUser[0]?.phone ? dataUser[0]?.phone : "(empty phone number)"}
          </p>
          <div className="menu-nav-mobile text-center text-2xl text-[#3A3D42CC] flex flex-col gap-3 ">
            <button
              onClick={() => {
                router.push("/home");
              }}
              className="hover:text-[#6379F4] duration-200"
            >
              Dashboard
            </button>
            <button
              onClick={() => {
                router.push("/transfer");
              }}
              className="hover:text-[#6379F4] duration-200"
            >
              Transfer
            </button>
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="hover:text-[#6379F4] duration-200"
            >
              Top Up
            </button>
            <button
              onClick={() => {
                router.push("/profile");
              }}
              className="hover:text-[#6379F4] duration-200"
            >
              Profile
            </button>
            <button
              onClick={() => {
                router.push("/history");
              }}
              className="hover:text-[#6379F4] duration-200"
            >
              History
            </button>
            <button
              onClick={() => {
                alert(
                  `You are logged out! See you soon, ${dataUser[0]?.first_name} 😊`
                );
                localStorage.removeItem("@login");
                router.push("/auth/login");
              }}
              className="hover:text-[#6379F4] duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <TopupModal
        isVisible={showModal}
        closeModal={() => setShowModal(false)}
      />
    </>
  );
}

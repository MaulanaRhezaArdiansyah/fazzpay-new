import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import TopupModal from "./TopupModal";

export default function SidebarMenu() {
  const router = useRouter();
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
  return (
    <>
      <div className="menu-card shadow-lg bg-white md:p-12 flex flex-col w-full h-full rounded-xl justify-between max-md:hidden">
        <div className="top flex flex-col md:gap-12">
          <button
            onClick={() => {
              router.push("/dashboard");
            }}
            className="flex items-center md:gap-3 cursor-pointer text-[#3A3D42CC] hover:text-[#6379F4]"
            activeclassname="active"
            title="dashboard"
          >
            <Image
              src="/images/grid.svg"
              width={28}
              height={28}
              alt="dashboard"
            />
            <p activeclassname="active">Dashboard</p>
          </button>
          <button
            onClick={() => {
              router.push("/transfer");
            }}
            className="flex items-center md:gap-3 cursor-pointer text-[#3A3D42CC] hover:text-[#6379F4]"
            title="transfer"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 22.1663V5.83301"
                stroke="#3A3D42"
                strokeOpacity="0.8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.83333 13.9997L14 5.83301L22.1667 13.9997"
                stroke="#3A3D42"
                strokeOpacity="0.8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Transfer</p>
          </button>
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="flex items-center md:gap-3 cursor-pointer text-[#3A3D42CC] hover:text-[#6379F4] "
            title="topup"
          >
            <Image src="/images/plus.svg" width={28} height={28} alt="topup" />
            <p>Top Up</p>
          </button>
          <button
            onClick={() => {
              router.push("/profile");
            }}
            className="flex items-center md:gap-3 cursor-pointer text-[#3A3D42CC] hover:text-[#6379F4]"
            title="profile"
          >
            <Image src="/images/user.svg" width={28} height={28} alt="user" />
            <p>Profile</p>
          </button>
        </div>
        <div className="bottom">
          <button
            onClick={() => {
              alert(
                `You are logged out! See you soon ${dataUser[0]?.first_name} 😊`
              );
              localStorage.removeItem("@login");
              router.push("/auth/login");
            }}
            className="flex items-center md:gap-3 cursor-pointer text-[#3A3D42CC] hover:text-[#6379F4]"
            title="logout"
          >
            <Image
              src="/images/log-out.svg"
              width={28}
              height={28}
              alt="logout"
            />
            <p>Logout</p>
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

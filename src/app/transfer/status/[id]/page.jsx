"use client";
import Footer from "@/app/components/Footer";
import HeaderLogged from "@/app/components/HeaderLogged";
import SidebarMenu from "@/app/components/SidebarMenu";
import React, { useEffect, useState } from "react";
import StatusFailed from "./StatusFailed";
import StatusSuccess from "./StatusSuccess";

export default function StatusTransfer() {
  const [isSuccessTransfer, setIsSuccessTransfer] = useState(false);
  useEffect(() => {
    const amountTransfer = typeof JSON.parse(
      localStorage.getItem("@amountConfirm")
    );
    const isSuccess = amountTransfer === "number";
    setIsSuccessTransfer(isSuccess);
    // console.log(isSuccess);
  }, []);
  return (
    <>
      <HeaderLogged />
      <main className="w-full h-[150vh] md:h-[220vh] md:py-10 md:pt-40 md:px-32 bg-base flex md:gap-5">
        <section className="menu md:w-3/12 h-full">
          <SidebarMenu />
        </section>
        <section className="content md:w-9/12 h-full flex md:flex-col md:gap-5">
          {isSuccessTransfer ? <StatusSuccess /> : <StatusFailed />}
        </section>
      </main>
      <Footer />
    </>
  );
}

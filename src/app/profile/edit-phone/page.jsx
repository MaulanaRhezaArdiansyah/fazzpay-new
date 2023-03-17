"use client";
import React from "react";
import HeaderLogged from "@/app/components/HeaderLogged";
import Footer from "@/app/components/Footer";
import SidebarMenu from "@/app/components/SidebarMenu";
import EditPhoneCard from "./EditPhoneCard";

export default function EditPhone() {
  return (
    <>
      <HeaderLogged />
      <main className="w-full h-[100vh] md:h-[150vh] md:py-10 md:pt-40 md:px-32 bg-base flex md:gap-5">
        <section className="menu md:w-3/12 h-full">
          <SidebarMenu />
        </section>
        <section className="content md:w-9/12 h-full flex md:flex-col md:gap-5">
          <EditPhoneCard />
        </section>
      </main>
      <Footer />
    </>
  );
}

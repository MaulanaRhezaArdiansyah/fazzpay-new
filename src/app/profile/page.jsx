"use client";
import React from "react";
import Footer from "../components/Footer";
import HeaderLogged from "../components/HeaderLogged";
import SidebarMenu from "../components/SidebarMenu";
import ProfileCardGeneral from "./ProfileCardGeneral";

export default function Profile() {
  return (
    <>
      <HeaderLogged />
      <main className="w-full h-[120vh] md:h-[150vh] md:py-10 md:pt-40 md:px-32 bg-base flex md:gap-5">
        <section className="menu md:w-3/12 h-full">
          <SidebarMenu />
        </section>
        <section className="content w-full md:w-9/12 h-[90%] sm:h-full flex md:flex-col md:gap-5">
          <ProfileCardGeneral />
        </section>
      </main>
      <Footer />
    </>
  );
}

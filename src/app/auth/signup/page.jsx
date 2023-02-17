"use client";
import BgAuth from "@/app/components/BgAuth";
import React from "react";
import FormSignup from "./FormSignup";

export default function page() {
  return (
    <>
      <main className="w-full h-[140vh] md:h-[150vh] flex">
        <BgAuth />
        <section className="md:w-[45%] bg-white px-3 md:pr-32 md:pl-10 py-3 md:py-16 md:h-full md:flex flex-col">
          <div className="w-full h-full pt-10">
            <h3 className="text-[#3A3D42] text-3xl mb-6">
              Start Accessing Banking Needs With All Devices and All Platforms
              With 30.000+ Users
            </h3>
            <p className="text-[#afafaf] mb-10">
              Transfering money is eassier than ever, you can access FazzPay
              wherever you are. Desktop, laptop, mobile phone? we cover all of
              that for you!
            </p>
            <FormSignup />
          </div>
        </section>
      </main>
    </>
  );
}

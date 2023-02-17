"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import FooterLanding from "./components/FooterLanding";
import HeaderUnlogged from "./components/HeaderUnlogged";
import Hero from "./components/Hero";
import CompanyPartner from "./components/CompanyPartner";
import AboutApp from "./components/AboutApp";
import FeatureApp from "./components/FeatureApp";
import ReviewApp from "./components/ReviewApp";
import { useEffect, useState } from "react";
import HeaderLogged from "./components/HeaderLogged";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLogged, setIsLogged] = useState("");
  useEffect(() => {
    const isLogged = JSON.parse(localStorage.getItem("@login"));
    setIsLogged(isLogged);
  }, []);
  return (
    <>
      {isLogged ? <HeaderLogged /> : <HeaderUnlogged />}
      <main className="bg-white w-full md:h-[500vh] h-[440vh] flex flex-col">
        <Hero />
        <CompanyPartner />
        <AboutApp />
        <FeatureApp />
        <ReviewApp />
      </main>
      <FooterLanding />
    </>
  );
}

"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Footer from "../components/Footer";
import HeaderLogged from "../components/HeaderLogged";
import SidebarMenu from "../components/SidebarMenu";
import BalanceCard from "./BalanceCard";
import ChartCard from "./ChartCard";
import TransactionHistory from "./TransactionHistory";

// import
export default function Dashboard() {
  // const segment = usePathname();
  // const id = segment.split("/")[2];
  const router = useRouter();
  useEffect(() => {
    const isLogged = JSON.parse(localStorage.getItem("@login"));
    // const userId = isLogged.user.id;
    //   const userPhone = isLogged?.user?.phone;
    if (isLogged === null) {
      router.push("/auth/login");
    }
  }, [router]);
  // else if (userPhone.length === 0) {
  //   router.push("/profile");
  // }
  return (
    <>
      <HeaderLogged />
      <main className="w-full h-[180vh] md:h-[150vh] md:py-10 md:pt-40 md:px-32 bg-base flex md:gap-5">
        <section className="menu md:w-3/12 h-full">
          <SidebarMenu />
        </section>
        <section className="content w-full md:w-9/12 h-full px-3 sm:px-0 flex flex-col pt-40 sm:pt-0 md:flex-col gap-5 md:gap-5">
          <BalanceCard />
          <div className="bottom flex flex-col sm:flex-row w-full md:h-3/4 gap-5 md:gap-5">
            <ChartCard />
            <TransactionHistory />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

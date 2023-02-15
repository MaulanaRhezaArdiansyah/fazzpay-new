import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="w-full h-screen bg-black flex items-center justify-center">
        <h1 className="text-3xl text-white font-medium">FazzPay App</h1>
      </main>
    </>
  );
}

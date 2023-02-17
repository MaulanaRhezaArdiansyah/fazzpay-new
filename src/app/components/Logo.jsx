import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <div className="logo text-[#6379F4] text-2xl font-bold flex items-center">
        <h2>FazzPay</h2>
      </div>
    </Link>
  );
}

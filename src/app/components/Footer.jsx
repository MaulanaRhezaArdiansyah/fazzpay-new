import React from "react";

export default function Footer() {
  return (
    <footer className="w-full h-32 sm:h-20 flex flex-col md:flex-row sm:justify-between justify-center items-center px-3 md:px-32 bg-[#6379F4] text-white">
      <p className="copyright">
        {new Date().getFullYear()} FazzPay. All right reserved.
      </p>
      <div className="flex md:gap-8">
        <p className="phone">+62 5637 8882 9901</p>
        <p className="email">contact@fazzpay.com</p>
      </div>
    </footer>
  );
}

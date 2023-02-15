import React from 'react'

export default function FooterLanding() {
  return (
    <footer className="w-full md:px-32 h-[50vh] md:h-72 bg-[#6379F4] flex flex-col justify-center px-3">
    <div className=" md:w-[30%] md:h-[60%] w-[80%] flex flex-col gap-3 md:gap-5 pb-14 md:pb-0">
      <div className="logo text-white text-3xl font-semibold">
        <h2>FazzPay</h2>
      </div>
      <div className="description text-[#EFEFEFBF]">
        <p className="md:w-[80%]">
          Simplify financial needs and saving much time in banking needs with
          one single app.
        </p>
      </div>
    </div>
    <hr />
    <div className="text-footer w-full flex flex-col md:flex-row justify-between items-start md:items-center pt-2 md:pt-2 gap-2 text-[#EFEFEFBF]">
      <p className="copyright">
        {new Date().getFullYear()}FazzPay. All right reserved.
      </p>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center md:gap-5">
        <p className="phone">+62 5637 8882 9901</p>
        <p className="email">contact@fazzpay.com</p>
      </div>
    </div>
  </footer>
  )
}

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function BgAuth() {
  return (
    <section className="bg-[#6379F4] hidden md:w-[55%] pl-3 md:pl-32 md:pr-10 py-3 md:py-16 md:h-full md:flex flex-col">
      <div className="w-full h-full text-white">
        <Link href={"/"}>
          <div className="logo text-white text-3xl font-bold flex items-center">
            <h2>FazzPay</h2>
          </div>
        </Link>
        <div className=" flex justify-start w-[90%] md:h-[70%]">
          <Image
            src="/images/phone-auth.png"
            alt="phone-auth"
            width={300}
            height={400}
            // className=" justify-start h-full w-full"
          />
        </div>
        <h4 className="text-3xl font-bold mb-5">
          App that Covering Banking Needs.
        </h4>
        <p>
          FazzPay is an application that focussing in banking needs for all
          users in the world. Always updated and always following world trends.
          5000+ users registered in FazzPay everyday with worldwide users
          coverage.
        </p>
      </div>
    </section>
  )
}

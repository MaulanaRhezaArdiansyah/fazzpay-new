import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="hero w-full md:px-32 md:h-[120vh] h-[80vh] max-sm:pt-28 bg-[#6379F4] flex md:flex-row px-3">
      <div className="text md:w-[50%] h-full flex flex-col justify-center items-start md:gap-8 gap-8 max-sm:items-center">
        <h2 className="text-white text-5xl md:w-[80%] font-bold max-sm:text-center">
          Awesome App For Saving Time.
        </h2>
        <p className="text-white md:w-[80%] max-sm:text-center">
          We bring you a mobile app for banking problems that oftenly wasting
          much of your times.
        </p>
        <Link href={"/"}>
          <button className="border-2 border-white bg-white rounded-md w-36 py-3 text-[#6379F4] font-bold hover:bg-transparent hover:text-white duration-200">
            Try It Free
          </button>
        </Link>
      </div>
      <div className="image md:w-[50%] h-full flex items-end max-sm:hidden">
        <Image src="/images/phone-hero.png" alt="phone-pic-lp" width={600} height={500}/>
      </div>
    </div>
  )
}

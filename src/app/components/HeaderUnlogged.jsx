import Link from 'next/link'
import React from 'react'

export default function HeaderUnlogged() {
  return (
    <header className="flex justify-between w-full h-28 items-center bg-[#6379F4]/90 backdrop-blur-sm fixed top-0 left-0 md:px-32 px-3">
        <div className="logo text-white text-3xl font-bold flex items-center">
          <h2>FazzPay</h2>
        </div>
        <nav className="navbar flex justify-center items-center md:gap-5 gap-1">
          <Link href="/" title="login">
            <button className="border-2 border-white bg-[#6379F4] rounded-md w-28 py-3 text-white font-bold hover:bg-white hover:text-[#6379F4] duration-200">
              Login
            </button>
          </Link>
          <Link href="/" title="signup">
            <button className="border-2 border-white bg-white rounded-md w-28 py-3 text-[#6379F4] font-bold hover:bg-transparent hover:text-white duration-200">
              Sign Up
            </button>
          </Link>
        </nav>
      </header>
  )
}

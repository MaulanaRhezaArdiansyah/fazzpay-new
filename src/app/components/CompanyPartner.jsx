import React from "react";
import Image from "next/image";

export default function CompanyPartner() {
  return (
    <div className="company w-full md:h-52 h-44 px-3 flex items-center justify-center bg-base-2 md:px-32">
      <div className=" h-full w-1/4 flex items-center justify-center">
        <Image
          src="/images/microsoft.png"
          width={120}
          height={60}
          alt="microsoft"
        />
      </div>
      <div className=" h-full w-1/4 flex items-center justify-center">
        <Image
          src="/images/dropbox.png"
          width={120}
          height={60}
          alt="dropbox"
        />
      </div>
      <div className=" h-full w-1/4 flex items-center justify-center">
        <Image src="/images/h&m.png" width={120} height={60} alt="h&m" />
      </div>
      <div className=" h-full w-1/4 flex items-center justify-center">
        <Image src="/images/airbnb.png" width={120} height={60} alt="airbnb" />
      </div>
    </div>
  );
}

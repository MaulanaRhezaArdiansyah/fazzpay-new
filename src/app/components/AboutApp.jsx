import React from 'react'
import Image from 'next/image';

export default function AboutApp() {
    const about = [
        {
          id: 1,
          title: "support",
          image: "support.png",
          tagline: "24/7 Support",
          content:
            "We have 24/7 contact support so you can contact us whenever you want and we will respond it.",
        },
        {
          id: 2,
          title: "privacy",
          image: "privacy.png",
          tagline: "Data Privacy",
          content:
            "We make sure your data is safe in our database and we will encrypt any data you submitted to us.",
        },
        {
          id: 3,
          title: "download",
          image: "download.png",
          tagline: "Easy Download",
          content:
            "Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.",
        },
      ];
  return (
    <div className="about-app md:px-32 bg-base w-full md:h-screen h-[140vh] flex flex-col items-center justify-center px-3 md:gap-6 gap-6">
      <h2 className="text-[#6379F4] text-5xl font-bold text-center">
        About <span className="text-[#3A3D42]">the Application.</span>
      </h2>
      <p className="text-[#3A3D42] md:mb-10 mb-10 md:w-[50%] text-center">
        We have some great features from the application and it’s totally free
        to use by all users around the world.
      </p>
      <div className="about-card-row flex flex-col md:flex-row w-full md:h-80 h-[40rem] justify-center items-center md:gap-5 gap-5">
        {about?.map((i) => {
          return (
            <div
              key={i.id}
              className="about-card rounded-xl bg-white shadow-lg md:h-64 h-60 md:w-72 flex flex-col items-center justify-center md:gap-3 md:p-5"
            >
              <Image
                    src={`/images/${i.image}`}
                    alt={i.title}
                    height={60}
                    width={60}
                  />
              <h4 className="text-[#3A3D42] font-bold text-xl text-center">
                {i.tagline}
              </h4>
              <p className="text-[#3A3D42E5] text-center">{i.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

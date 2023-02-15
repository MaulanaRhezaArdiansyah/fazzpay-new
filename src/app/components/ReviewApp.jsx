import React from 'react'
import Image from 'next/image';

export default function ReviewApp() {
    const reviews = [
        {
          id: 1,
          avatar: "review.png",
          firstname: "Alex",
          lastname: "Hansinburg",
          job: "Designer",
          review:
            "“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”",
        },
      ];
      return (
        <div className="about-app md:px-32 w-full md:h-[130vh] h-[100vh] flex flex-col items-center justify-center md:gap-6 gap-6 px-3">
          <h2 className="text-[#3A3D42] text-5xl font-bold text-center">
            What Users are <span className="text-[#6379F4]">Saying.</span>
          </h2>
          <p className="text-[#3A3D42] md:mb-10 md:w-[50%] text-center">
            We have some great features from the application and it’s totally free
            to use by all users around the world.
          </p>
          <div className="review-container flex w-full md:h-[40%] md:px-32 justify-center items-center md:gap-10">
            {reviews?.map((r) => {
              return (
                // <div>
                <div key={r.id} className="w-full flex items-center gap-5" >
                  <div className="md:w-14 md:h-12 rounded-full bg-white shadow-xl flex items-center justify-center cursor-pointer hover:scale-125 duration-200 max-sm:hidden">
                    <Image
                    src="/images/arrow-left.png"
                    alt={r.title}
                    height={60}
                    width={60}
                  />
                  </div>
    
                  <div className="review-card md:h-full h-[30rem] md:w-[90%] bg-white shadow-xl rounded-xl flex flex-col items-center justify-center md:px-8 md:py-10 p-8">
                    <div className="review-img md:w-16 md:h-16 flex items-center justify-center md:mb-2 rounded-full">
                      <Image src={r?.avatar
                            ? `/images/${r.avatar}`
                            : `/images/default-avatar.jpg`} alt="reviewer-avatar" width={60} height={60} />
                    </div>
                    <h5 className="text-[#373C46] text-lg font-bold text-center">
                      Alex Hansinburg
                    </h5>
                    <p className="text-[#56585B] md:mb-8 text-center mb-8">
                      Designer
                    </p>
                    <p className="text-[#676A71] text-center">
                      “This is the most outstanding app that I’ve ever try in my
                      live, this app is such an amazing masterpiece and it’s
                      suitable for you who is bussy with their bussiness and must
                      transfer money to another person aut there. Just try this app
                      and see the power!”
                    </p>
                  </div>
    
                  <div className="md:w-14 md:h-12 rounded-full bg-white shadow-xl flex items-center justify-center cursor-pointer hover:scale-125 duration-200 max-sm:hidden">
                  <Image
                    src="/images/arrow-right.png"
                    alt={r.title}
                    height={60}
                    width={60}
                  />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
}

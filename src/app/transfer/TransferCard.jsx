import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function TransferCard() {
  const router = useRouter();
  const [userData, setUserData] = useState([]);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/users?search=${keyword}`)
      .then((result) => {
        // console.log(result.data.data);
        setUserData(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [keyword]);
  return (
    <div className="md:w-full md:h-full bg-white rounded-xl shadow-xl flex flex-col p-10 gap-6">
      <p className="text-xl text-[#3A3D42] font-bold">Search receiver</p>

      <div className="searchbar bg-[#e6e7e9] text-[#4D4B57] h-14 w-full rounded-xl flex px-5">
        <div className="search-icon flex items-center justify-center h-full w-[5%]">
          <Image
            src="/images/search.png"
            alt="search-icon"
            width={24}
            height={24}
          />
        </div>
        <input
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          type="text"
          className="h-full bg-transparent w-[90%] px-3 focus:outline-none"
          placeholder="Search receiver here"
        />
      </div>

      <div className="receiver-container w-full flex flex-col md:h-[90%] gap-5">
        {userData?.map((i) => {
          return (
            <div
              key={i.id}
              onClick={() => router.push(`/transfer/${i.id}`)}
              className="receiver-card w-full h-28 rounded-xl shadow-lg flex p-5 cursor-pointer"
              title={i.first_name ? i.first_name : "profile avatar"}
            >
              <div className="flex items-center h-full w-full ">
                <div className="w-14 h-14 flex justify-center items-center mr-3">
                  <img
                    src={
                      i.avatar
                        ? `http://localhost:8000/uploads/images/${i.avatar}`
                        : `http://localhost:3000/images/default-avatar.jpg`
                    }
                    alt={i.first_name ? i.first_name : "profile avatar"}
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div>
                  <p className="text-[#4D4B57] text-xl font-bold">
                    {i.first_name} {i.last_name}
                  </p>
                  <p className="text-[#7A7886]">
                    {i.phone ? i.phone : "(Empty phone number)"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

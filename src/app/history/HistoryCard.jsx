import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import FilterHistory from "./FilterHistory";
export default function HistoryCard() {
  const [showModalFilter, setShowModalFilter] = useState(false);
  // const [history, setHistory] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("@login"))?.user.id;
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/history/${id}`)
      .then((result) => {
        // const historyArray = result.data.data.history;
        // setHistory(historyArray);
        setDataUser(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(history);
  // history.map((item) => {
  //   console.log(item.sender_id);
  // });
  // const idSender =
  // useEffect(()=> {
  //   axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${id}`)
  // })
  return (
    <>
      <div className="w-full h-[90%] md:w-full md:h-full bg-white rounded-xl shadow-xl flex flex-col p-10 max-sm:mt-10">
        <div className="w-full md:h-[10%] flex flex-col sm:flex-row justify-between items-center mb-6 md:mb-6">
          <p className="text-xl text-[#3A3D42] font-bold max-sm:mb-3">
            Transaction History
          </p>
          <button
            onClick={() => setShowModalFilter(true)}
            className="bg-[#e6e7e9] py-3 w-40 hover:bg-[#6379F4] hover:text-white rounded-xl duration-200"
          >
            --Select Filter--
          </button>
        </div>
        <div className="transaction-list-container w-full md:h-[90%] overflow-scroll">
          {/* {dataUser?.history?.map((i) => { */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
            return (
              <div
                key={i.transaction_id}
                className="transaction-list w-full h-24 md:h-24 flex items-center justify-between mb-1"
              >
                <div className="flex items-center">
                  <div className="w-14 h-14 flex justify-center items-center mr-3">
                    <Image
                      // src={require("../../../assets/img/foto-profil-2.jpeg")}
                      src="/images/foto-profil-2.jpeg"
                      alt="profile"
                      className="w-full h-full rounded-full"
                      width={14}
                      height={14}
                    />
                  </div>
                  <div>
                    <p className="text-[#4D4B57] text-lg font-bold">
                      Samuel Suhi
                    </p>
                    <p className="text-[#7A7886]">Accept</p>
                  </div>
                </div>
                {/* <p className="font-bold text-[#1EC15F] text-xl">+Rp50.000</p> */}
                <p className="font-bold text-[#1EC15F] text-xl">{i.amount}</p>
              </div>
            );
          })}
        </div>
      </div>
      <FilterHistory
        isVisible={showModalFilter}
        closeModal={() => setShowModalFilter(false)}
      />
    </>
  );
}

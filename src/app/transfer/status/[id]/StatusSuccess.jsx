import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import html2canvas from "html2canvas";
export default function StatusSuccess() {
  // const ref = React.useRef(null);
  const segment = usePathname();
  const router = useRouter();
  const id = segment.split("/")[3];
  const amountTransfer = JSON.parse(localStorage.getItem("@amountConfirm"));
  const [userDetail, setUserDetail] = useState({});
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${id}`)
      .then((result) => {
        setUserDetail(result?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const [senderDetail, setSenderDetail] = useState({});
  useEffect(() => {
    const idSender = JSON.parse(localStorage.getItem("@login"))?.user.id;
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${idSender}`)
      .then((result) => {
        setSenderDetail(result?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const balanceLeft = parseInt(senderDetail?.balance);

  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // const handleDownload = () => {
  //   const screenShotTarget = ref.current;
  //   html2canvas(document.querySelector("#proofOfPayment")).then((canvas) => {
  //     document.body.appendChild(canvas);
  //   });
  //   html2canvas(screenShotTarget).then((canvas) => {
  //     const base64image = canvas.toDataURL("image/png");
  //     var anchor = document.createElement("a");
  //     anchor.setAttribute("href", base64image);
  //     anchor.setAttribute("download", "ticket.png");
  //     anchor.click();
  //     anchor.remove();
  //   });
  // };

  return (
    <div
      // id="proofOfPayment"
      // ref={ref}
      className="h-[90%] md:w-full md:h-full bg-white rounded-xl shadow-xl flex flex-col p-10 gap-6 max-sm:mt-10"
    >
      <div className="transfer-status w-full h-52 flex flex-col items-center justify-center gap-6">
        <Image src="/images/success.png" alt="success" width={40} height={40} />
        <p className="text-[#514F5B] text-2xl font-bold text-center">
          Transfer Success
        </p>
      </div>
      <div className="details-container flex flex-col w-full">
        <div className="receiver-card bg-white w-full h-28 rounded-xl shadow-lg flex p-5 mb-5 flex-col justify-center gap-1">
          <p className="text-[#7A7886]">Amount</p>
          <p className="text-[#514F5B] text-2xl font-bold">
            Rp {numberWithCommas(amountTransfer)}
          </p>
        </div>
        <div className="receiver-card bg-white w-full h-28 rounded-xl shadow-lg flex p-5 mb-5 flex-col justify-center gap-1">
          <p className="text-[#7A7886]">Balance Left</p>
          <p className="text-[#514F5B] text-2xl font-bold">
            Rp {numberWithCommas(balanceLeft)}
          </p>
        </div>
        <div className="receiver-card bg-white w-full h-28 rounded-xl shadow-lg flex p-5 mb-5 flex-col justify-center gap-1">
          <p className="text-[#7A7886]">Date & Time</p>
          <p className="text-[#514F5B] text-2xl font-bold">
            May 11, 2020 - 12.20
          </p>
        </div>
        <div className="receiver-card bg-white w-full h-28 rounded-xl shadow-lg flex p-5 mb-5 flex-col justify-center gap-1">
          <p className="text-[#7A7886]">Notes</p>
          <p className="text-[#514F5B] text-2xl font-bold">
            For buying some socks
          </p>
        </div>
      </div>
      <p className="text-xl text-[#3A3D42] font-bold">Transfer To</p>
      <div className="receiver-card bg-white w-full h-28 rounded-xl shadow-lg flex p-5 mb-5">
        <div className="flex items-center h-full w-full ">
          <div className="w-14 h-14 flex justify-center items-center mr-3">
            <Image
              src={
                userDetail.avatar
                  ? `${process.env.NEXT_PUBLIC_API_URL}/images/${userDetail?.avatar}`
                  : `http://localhost:3000/images/default-avatar.jpg`
              }
              className="rounded-full"
              width={62}
              height={62}
              alt={
                userDetail?.first_name
                  ? userDetail?.first_name
                  : "profile avatar"
              }
            />
          </div>
          <div>
            <p className="text-[#4D4B57] text-xl font-bold">
              {userDetail.first_name} {userDetail.last_name}
            </p>
            <p className="text-[#7A7886]">
              {userDetail.phone ? userDetail.phone : "(empty phone number)"}
            </p>
          </div>
        </div>
      </div>
      <div className="button w-full md:h-56 flex flex-col justify-center items-center sm:flex-row sm:justify-end sm:items-end gap-5 max-sm:mt-24">
        <button
          // onClick={handleDownload}
          onClick={() => alert("For now, this feature still on development.")}
          className="bg-[#d8deff] sm:self-end md:w-48 w-60 text-lg py-3 font-semibold rounded-xl text-[#6379F4] border-[2px] border-[#d8deff] hover:bg-[#e3e8ff] hover:border-[#e3e8ff] duration-200 flex items-center justify-center gap-2"
        >
          <Image src="/images/download-pdf.png" alt="" width={30} height={30} />
          Download PDF
        </button>
        <Link href={`/dashboard`}>
          <button className="bg-[#6379F4] self-end md:w-48 w-60 text-lg py-3 font-semibold rounded-xl text-white border-[2px] border-[#6379F4] hover:text-[#6379F4] hover:bg-white duration-200">
            Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}

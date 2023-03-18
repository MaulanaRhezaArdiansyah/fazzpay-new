"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import EditIcon from "../../assets/img/edit-transfer.png";
export default function EditAvatarModal({ isVisible, closeModal, dataUser }) {
  const [selectedImage, setSelectedImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [userID, setUserID] = useState();
  useEffect(() => {
    const id = JSON.parse(localStorage?.getItem("@login"))?.user.id;
    setUserID(id);
  }, []);
  function onImageUpload(event) {
    const file = event.target.files[0];
    setSelectedImage(file);
    setImagePreview(URL.createObjectURL(file));
  }
  function handleEditAvatar(e) {
    e.preventDefault();
    const dataAvatar = new FormData();
    dataAvatar.append("avatar", selectedImage);
    axios({
      method: "PATCH",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/avatar/${userID}`,
      data: dataAvatar,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((result) => {
        alert(result?.data?.message);
        closeModal();
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
      });
  }
  if (!isVisible) {
    return null;
  }
  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      closeModal();
    }
  };
  return (
    <div
      onClick={handleClose}
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-20"
    >
      <form
        onSubmit={handleEditAvatar}
        className="topup-form md:w-[500px] w-[80%] max-sm:w-[90%] h-[70%] md:h-[400px] bg-white rounded-xl shadow-lg flex flex-col items-center justify-center md:p-10 p-10 gap-10 md:gap-5 z-30"
      >
        <div className="relative">
          <label htmlFor="editAvatar">
            <img
              src={
                dataUser.avatar
                  ? `${process.env.NEXT_PUBLIC_API_URL}/images/${dataUser?.avatar}`
                  : `http://localhost:3000/images/default-avatar.jpg`
              }
              alt={
                dataUser?.first_name ? dataUser?.first_name : "profile avatar"
              }
              className="rounded-full w-32 h-32 cursor-pointer hover:border-[6px] hover:border-[#6379F4] duration-200"
            />
            {/* <Image
              src={
                imagePreview
                  ? imagePreview
                  : dataUser?.avatar
                  ? `${process.env.NEXT_PUBLIC_API_URL}/images/${dataUser.avatar}`
                  : `http://localhost:3000/images/default-avatar.jpg`
              }
              width={132}
              height={132}
              className="rounded-full cursor-pointer hover:border-[6px] hover:border-[#6379F4] duration-200"
              alt={
                dataUser?.first_name ? dataUser?.first_name : "profile avatar"
              }
            /> */}
            <div className="bg-[#001694] rounded-full w-10 h-10 flex items-center justify-center absolute right-0 bottom-0">
              <Image
                src={EditIcon}
                width={20}
                height={20}
                className="rounded-full cursor-pointer"
                alt={"edit icon profile avatar"}
              />
            </div>
          </label>
          <input
            onChange={(event) => onImageUpload(event)}
            type="file"
            name="edit"
            id="editAvatar"
            hidden
          />
        </div>
        <button
          type="submit"
          className="bg-[#6379F4] md:w-40 w-32 text-lg py-3 font-semibold rounded-xl text-white border-[2px] border-[#6379F4] hover:text-[#6379F4] hover:bg-white duration-200"
        >
          Save
        </button>
      </form>
    </div>
  );
}

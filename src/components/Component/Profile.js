import React from "react";
import Image from "next/image";
import { BiToggleRight } from "react-icons/bi";

const Profile = () => {
  const items = [
    {
      title: " Sr. Marketing Manager",
      name: "Total Applications",
      color: "#2668E8",
      flag: true,
    },
    {
      title: " Sr. Marketing Manager",
      name: "Total Applications",
      color: "#F05519",
    },
  ];
  const data = [
    {
      image: "/images/clock.svg",
      data: "Your Subscribtion expires Today",
      title: "Renew Now",
      color: "#B4C7ED6E",
      flag: true,
    },
    {
      image: "/images/file.svg",
      data: "There are 5 new applications for",
      title: "Marketing Manager",
      color: "#F055194F",
    },
    {
      image: "/images/cross.svg",
      data: "You have closes the job post for ",
      title: "Design Lead",
      color: "#09D69038",
    },
    {
      image: "/images/Group.svg",
      data: "You have drafted a job post for ",
      title: "Marketing Manager",
      color: "#D7A31152",
    },
  ];
  return (
    <div>
      <div className="-mt-[6.6rem] rounded-lg  p-3 w-[20rem]  bg-[#FFFFFF] bg-[0px 4px 21px 0px #0000000D]">
        <div className="mt-2 flex flex-col items-center justify-center">
          <Image
            src={"/images/11.svg"}
            height={100}
            width={100}
            className=""
            alt="profile"
          ></Image>
          <h1 className="font-semibold mt-4 text-[18px]">James williams</h1>
          <h1 className="font-normal mt-1 text-[#777777]">Director</h1>
          <div className="flex gap-2">
            <Image
              src={"/images/Vector.svg"}
              width={10}
              height={10}
              alt="dd"
            ></Image>
            <h1 className="font-normal mt-1 text-[#2668E8]">Mumbai India</h1>
          </div>
        </div>
        {/* ============================================================== */}
        <div className="flex mt-6 justify-around">
          <h1 className="font-semibold text-[18px] ">Job Posted </h1>
          <div>
            <button className="cursor-pointer m-auto pb-1 pl-3 pr-3 text-white bg-[#2668E8] rounded-lg">
              +Add
            </button>
            <button className=" ml-2 p-2 bg-[#D8D8D8] rounded-sm">
              <Image
                src={"/images/right.svg"}
                height={5}
                width={5}
                alt="23"
              ></Image>
            </button>
          </div>
        </div>
        {/* =================================================================== */}
        <div className="">
          {items.map((item, index) => {
            return (
              <div
                style={{ background: item.color }}
                className="flex mt-4 rounded-lg items-center justify-between p-2"
              >
                <div className="p-2 bg-[#B4C7ED30] rounded-lg text-white">
                  {" "}
                  77
                </div>
                <div>
                  <h1 className="text-white"> Sr. Marketing Manager</h1>
                  <h1 className="text-[#CFC5C5] font-normal">
                    Total Applications
                  </h1>
                </div>
                <div>
                  {/* <BiToggleRight className="text-2xl -mt-2 rounded-full  text-[#F05519]" /> */}
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
            );
          })}
        </div>
        {/* =================================================================== */}
        <div className="flex justify-between mt-6 mb-5 ">
          <h1 className="font-semibold text-[18px]">Reminders</h1>
          <Image
            src={"/images/bell.svg"}
            height={20}
            width={20}
            alt="a"
          ></Image>
        </div>
        {/* ================================================================ */}
        <div className="mt-2 pb-28">
          {data.map((item, index) => {
            return (
              <div className="flex gap-2 mt-2 mb-2">
                <div
                  style={{ background: item.color }}
                  className="p-3 rounded-lg"
                >
                  <Image
                    src={item.image}
                    height={15}
                    width={15}
                    alt="a"
                  ></Image>
                </div>
                <div>
                  <h1 className="font-normal">{item.data}</h1>
                  <h1
                    className={
                      item.flag ? "font-medium text-[#2668E8]" : "font-normal"
                    }
                  >
                    {item.title}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;

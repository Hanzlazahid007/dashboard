import React from "react";
import Image from "next/image";

const Topcard = () => {
  const data = [
    {
      title: "Total Applications",
      score: 6787,
      image: "/images/topcard1.svg",
      grpah: "/images/icon red.svg",
      colors: "#2668E8",
      color: "#2668E833",
    },
    {
      title: "Shoertlisted Candidates",
      score: 2234,
      image: "/images/daadad 1.svg",
      grpah: "/images/icon blue.svg",
      color: "#F0551930",
      colors: "#F05519",
      flag: true,
    },
    {
      title: "Total Applications",
      score: 6787,
      image: "/images/fdfff 1.svg",
      grpah: "/images/icon green.svg",
      color: "#09D69030",
      colors: "#09D690",
    },
  ];

  return (
    <div className="flex gap-7">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className=" bg-[ 0px 4px 21px 0px #0000000D] bg-white w-[12rem] h-[6.5rem] p-4 rounded-lg relative"
          >
            <h1 className="text-[#777777] font-poppins ">Total Applications</h1>

            <div
              className="p-2 absolute right-4 top-10 h-12 w-12"
              style={{ background: item.color }}
            >
              <Image src={item.image} height={30} width={30} alt="logo" />
            </div>
            <h1 className="font-semibold font-poppins text-lg">6787</h1>
            <div className="flex mt-2 ">
              <Image
                className="mr-1"
                src={item.grpah}
                height={20}
                width={20}
                alt="graph"
              />

              <h1
                className="font-poppins font-normal"
                style={{ color: item.colors }}
              >
                {" "}
                +45% inc
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Topcard;

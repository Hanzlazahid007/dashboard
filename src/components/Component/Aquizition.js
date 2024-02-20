import React from "react";
import Image from "next/image";

const Aquizition = () => {
  const items = [
    {
      title: "applications",
      score: "66%",
      color: "#2668E8",
      width: "16",
      flag: false,
    },
    {
      title: "Shortlisted          ",
      score: "66%",
      color: "#D7A311",
      width: "30",
      flag: false,
    },
    {
      title: "Rejected ",
      score: "66%",
      color: "#F05519",
      width: "16",
      flag: false,
    },
    {
      title: "onHold",
      score: "66%",
      color: "#09D690",
      width: "16",
      flag: false,
    },
    {
      title: "Finalized",
      score: "66%",
      color: "#2668E8",
      width: "16",
      flag: true,
    },
  ];
  return (
    <div className="mt-6 rounded-lg p-3 w-[19.1rem] h-[19rem] bg-[#FFFFFF] bg-[0px 4px 21px 0px #0000000D]">
      <div className="flex justify-between">
        <h1 className="font-semibold font-[#000000]  ">Acquistions</h1>
        <div>
          <select className="border-2 pl-3 pr-2 pt-[0.3rem] pb-[0.3rem] rounded-md font-poppins font-normal text-[16px]  outline-none border-[#CAC0C0] ">
            <option>Month</option>
            <option> Month</option>
            <option> Month</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col">
        {items.map((item, index) => {
          return (
            <>
              <div key={index} className="flex mt-5 justify-between">
                <div
                  className="w-3 h-3 bg-[#2668E8] rounded-full"
                  style={{ background: item.color }}
                ></div>
                <h1 className=" font-[#777777] font-normal -mt-[0.27rem]">
                  {item.title}
                </h1>
                <div className="h-1  mt-[0.4rem] w-40 rounded-full bg-[#D9D9D9]">
                  <div
                    className="h-1  mt[0.4rem  "
                    style={{ background: item.color, width: item.score }}
                  ></div>
                </div>
                <h1 className="mt-2  font-normal font-[#777777]">
                  {" "}
                  {item.score}
                </h1>
              </div>
              <hr
                className={
                  item.flag ? "hidden" : "bg-[#DDDDDD] -ml-3  w-[19.1rem]"
                }
              ></hr>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Aquizition;

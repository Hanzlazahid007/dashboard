import React from "react";

const Resume = () => {
  const items = [
    {
      title: "GraphicDesigner",
      score: "66%",
      color: "#2668E8",
      width: "16",
      flag: false,
    },
    {
      title: "Salesperson",
      score: "77%",
      color: "#F05519",
      width: "30",
      flag: false,
    },
    {
      title: "UIUX Designer",
      score: "88%",
      color: "#09D690",
      width: "16",
      flag: false,
    },
  ];
  return (
    <div className="mt-6 rounded-lg p-3 w-[19.5rem] h-[19rem] bg-[#FFFFFF] bg-[0px 4px 21px 0px #0000000D]">
      <div>
        <h1 className="font-[#000000] font-semibold ">Resume</h1>
      </div>
      <div className="flex flex-col">
        {items.map((item, index) => {
          return (
            <>
              <div key={index} className=" relative  mt-6">
                <h1 className=" font-[#777777] font-normal -mt-[1rem]">
                  {item.score}
                </h1>
                <div className="h-1  mt-[0.4rem] w-full mb-4 rounded-full bg-[#D9D9D9]">
                  <div
                    className="h-1  mt[0.4rem  "
                    style={{ background: item.color, width: item.score }}
                  ></div>
                </div>
                <h1 className="-mt-[1.5rem] absolute right-0 top-3 font-normal text-[#777777]">
                  {" "}
                  {item.title}
                </h1>
              </div>
              <hr
                className={
                  item.flag ? "hidden" : "bg-[#DDDDDD] -ml-3  w-[19.5rem]"
                }
              ></hr>
            </>
          );
        })}
      </div>
      <div className="flex mt-3 justify-between">
        <h1 className="text-[#000000] font-medium">SubScribtion</h1>
        <h1 className="font-medium text-[#F05519]">upgrade</h1>
      </div>
      <div className="flex mt-2 gap-20">
        <h1 className="font-normal text-[#777777]">Active Plan</h1>
        <h1 className="font-medium text-[#000000]">basic</h1>
      </div>
      <div className="flex mt-2 gap-20">
        <h1 className="font-normal text-[#777777]">Renewal Date</h1>
        <h1 className="font-medium -ml-4 text-[#000000]">12 July 2023</h1>
      </div>
    </div>
  );
};

export default Resume;

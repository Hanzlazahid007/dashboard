import React from "react";

const Location = () => {
  const data = [
    {
      name: "choose location",
    },
    {
      name: "Salry Range",
    },
  ];

  return (
    <>
      <div className="flex justify-between">
        <ul className="flex space-x-4">
          {data.map((item, index) => {
            return (
              <select
                key={index}
                className="pl-3 pr-1 pt-2 pb-2 outline-none  bg-[#F0551926] text-[#F05519] rounded-md"
              >
                <option>{item.name} </option>
                <option>{item.name} </option>
                <option>{item.name} </option>
                <option>{item.name} </option>
                <option>{item.name} </option>
                <option>{item.name} </option>
              </select>
            );
          })}
        </ul>
        <div>
          <select className="pl-3 pr-1 pt-2 pb-2  bg-[#2668E81F] rounded-md outline-none text-[#2668E8]">
            <option className="pr-8">Newest </option>
            <option className="pr-8">Newest </option>
            <option className="pr-8">Newest </option>
            <option className="pr-8">Newest </option>
            <option className="pr-8">Newest </option>
            <option className="pr-8">Newest </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Location;

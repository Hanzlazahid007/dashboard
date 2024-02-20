import React, { useState } from "react";

const Newest = () => {
  const [data, setData] = useState([
    {
      name: "ALL Status",
      flag: true,
    },
    {
      name: "pending",
      flag: false,
    },
    {
      name: "On-Hold",
      flag: false,
    },
    {
      name: "Candidate",
      flag: false,
    },
  ]);

  const handleFilter = (name) => {
    // ta(newData);
    // console.log(data);
    // const newdata = data.map((item, index) => {
    //   item.name === name ? { ...item, flag: true } : { ...item, flag: false };
    // });
    // console.log(newdata);
    const newData = data.map((items, index) => {
      return items.name === name
        ? { ...items, flag: true }
        : { ...items, flag: false };
    });
    setData(newData);
  };

  return (
    <div>
      <div className="flex justify-between">
        <ul className="flex space-x-4">
          {data.map((item, index) => {
            return (
              <div
                onClick={() => handleFilter(item.name)}
                className={
                  item.flag
                    ? "ursor-pointer font-normal font-poppins text-[#2668E8]"
                    : "cursor-pointer"
                }
              >
                {item.name}
              </div>
            );
          })}
        </ul>
        <div>
          <select className="pl-3 pr-2 pt-2 pb-2  outline-none  bg-[#2668E81F] text-[#2668E8]">
            <option>Newest </option>
            <option>Newest </option>
            <option>Newest </option>
            <option>Newest </option>
            <option>Newest </option>
            <option>Newest </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Newest;

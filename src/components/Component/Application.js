import Table from "./Table";
import React from "react";

const Application = () => {
  return (
    <div>
      <div className="-mt-[22.1rem] rounded-lg p-3 w-[40rem] h-auto bg-[#FFFFFF] bg-[0px 4px 21px 0px #0000000D]">
        <div>
          <h1 className="font-[#000000] font-semibold ">Recent Applications</h1>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Application;

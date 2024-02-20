import Application from "@/components/Component/Application";
import Aquizition from "@/components/Component/Aquizition";
import Profile from "@/components/Component/Profile";
import Resume from "@/components/Component/Resume";
import Topcard from "@/components/Component/Topcard";
import React from "react";

const index = () => {
  return (
    <>
      <Topcard />
      <div className="flex gap-4">
        <Aquizition />
        <Resume />
        <Profile />
      </div>
      <Application />
    </>
  );
};

export default index;

import React from "react";
import Navbar from "@/components/organismos/Navbar/page";
import SimpleCard from "@/components/atoms/simpleCard/page"
const Page = () => {
  return (
    <div className="w-full h-full">
      <div className=" flex flex-col justify-center items-center gap-0.5 ">
        <Navbar />
      </div>
      <div className="flex flex-row gap-4">
      <SimpleCard />
      <SimpleCard />
      <SimpleCard />
      </div>
    </div>
  );
};

export default Page;

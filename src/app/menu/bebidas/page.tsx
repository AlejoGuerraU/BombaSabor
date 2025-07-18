"use client";
import React from "react";
import { useState } from "react";
import Navbar from "@/components/organismos/Navbar/page";
import Sidebar from "@/components/organismos/Sidebar/page";
import { SmallText } from "@/components/atoms/heroTitles/page";
import CardCategories from "@/components/organismos/cardCategories/page";
import SimpleCard from "@/components/atoms/simpleCard/page";

const Page = () => {
  const [sidebarOpen, setSideberOpen] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCardClick = (categoryLabel: string) => {
    setSelectedCategory(categoryLabel);
    setShowDetail(true);
  };

  const handleClose = () => {
    setShowDetail(false);
    setSelectedCategory(null);
  };
  return (
    <div>
      <div className=" flex flex-row justify-center items-center gap-0.5 ">
        <Navbar onMenuClick={() => setSideberOpen(true)} />
      </div>
      <div className=" flex flex-col justify-start items-start">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSideberOpen(false)} />
      </div>

      <div className="flex justify-center items-center font-bold">
        <SmallText text={"BEBIDAS"} />
      </div>
      <div className=" flex flex-row gap-10 justify-center">
        <div className=" flex flex-row justify-around items-center">
          <CardCategories
            image="/jugo.png"
            label="POSTRES"
            onClick={() => handleCardClick("POSTRES")}
          />
        </div>
        <div className=" flex flex-row justify-around items-center">
          <CardCategories
            image="/jugo.png"
            label="POSTRES"
            onClick={() => handleCardClick("POSTRES")}
          />
        </div>
        <div className=" flex flex-row justify-around items-center">
          <CardCategories
            image="/jugo.png"
            label="POSTRES"
            onClick={() => handleCardClick("POSTRES")}
          />
        </div>
      </div>
      <div className=" flex flex-row gap-10 justify-center mt-20">
        <div className=" flex flex-row justify-around items-center">
          <CardCategories
            image="/jugo.png"
            label="POSTRES"
            onClick={() => handleCardClick("POSTRES")}
          />
        </div>
        <div className=" flex flex-row justify-around items-center">
          <CardCategories
            image="/jugo.png"
            label="POSTRES"
            onClick={() => handleCardClick("POSTRES")}
          />
        </div>
        <div className=" flex flex-row justify-around items-center">
          <CardCategories
            image="/jugo.png"
            label="POSTRES"
            onClick={() => handleCardClick("POSTRES")}
          />
        </div>
      </div>
      {showDetail && selectedCategory && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <SimpleCard category={selectedCategory} onClose={handleClose} />
        </div>
      )}
    </div>
  );
};

export default Page;

import React from "react";
import Icon from "@/components/atoms/icon/page";

interface Indexprops {
  title?: string;
  link?: string;
  color?: string;
  icon: string

}

interface Indexpropslink {
  text?: string;
  colorText?: string;
  colorButtom?: string;
}

const Page = ({ title, link, color, icon }: Indexprops) => {
  return (
    <div
      className={`flex  items-center h-10 w-100 rounded-4xl  text-black font-bold cursor-pointer ${color}`}
    >
      <a href={link}></a>
      <div className=" flex justify-start items-center">
        <Icon icon={icon} color={"bg-bank1"} />
      </div>
      <div className="flex justify-center">{title}</div>
    </div>
  );
};

const PersonalizeButtom = ({ text, colorButtom, colorText }: Indexpropslink) => {
  return (
    <div className={`flex justify-center p-4 items-center w-80 h-12 border-2 rounded-xl gap-5 cursor-pointer bg-${colorButtom}`}>
      <div className={`flex justify-center font-bold text-${colorText}`}>{text}</div>
    </div>
  );
};

export { Page, PersonalizeButtom };

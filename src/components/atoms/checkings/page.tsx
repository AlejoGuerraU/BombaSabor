import React from "react";
import { SmallText } from "../heroTitles/page";
import { Icon } from "@iconify/react";

interface indexprops {
  title?: string;
  textSm?: string;
  icon?: string;
  color?: string;
}
const LoginBar = ({
  title = "Titulo",
  textSm = "Texto Sombreado",
}: indexprops) => {
  return (
    <div>
      <SmallText text={title} />
      <div className="flex p-4 items-center w-80 h-12 border-2 rounded-xl">
        <input type="text" placeholder={textSm} />
      </div>
    </div>
  );
};

const LoginApps = ({
  icon = "icono",
  textSm = "Texto",
  color = "Color",
}: indexprops) => {
  return (
    <div>
      <button>
        <div className="flex p-4 items-center w-80 h-12 border-2 rounded-xl gap-5 cursor-pointer">
          <Icon icon={icon} width="30" height="30" color={color} />
          <SmallText text={textSm} />
        </div>
      </button>
    </div>
  );
};

export { LoginBar, LoginApps };

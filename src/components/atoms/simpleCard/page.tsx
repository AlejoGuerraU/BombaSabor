import React from "react";
import { SmallText } from "../heroTitles/page";

const Page = () => {
  return (
    <div className="w-82 h-100">
      <div className="{`flex flex-col rounded-2xl justify-center items-center border-2 border-gray-50 shadow-lg p-1 border-2`}">
        <div className="w-80 h-100">
          <div>
            <img src="jugo.png" alt="jugo" className="rounded-t-4xl" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-bold">
              <SmallText text="Jugo con fruta 100% natural con 50 gr de azucares añadidos" />
            </div>
            <div className="font-bold flex flex-row justify-between items-center">
              <SmallText text="$5000" />
              <div className="flex items-center justify-center h-12 w-35 rounded-2xl bg-bank4">
                <SmallText text="Añadir" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

"use client";
import React, { useState } from "react";
import Navbar from "@/components/organismos/Navbar/page";
import Sidebar from "@/components/organismos/Sidebar/page";
import { SmallText } from "@/components/atoms/heroTitles/page";
import Basecard from "@/components/organismos/baseCard/page";

const Page = () => {
  const [sidebarOpen, setSideberOpen] = useState(false);
  return (
    <div>
      <div className=" flex flex-row justify-center items-center gap-0.5 ">
        <Navbar onMenuClick={() => setSideberOpen(true)} />
      </div>
      <div className=" flex flex-col justify-start items-start">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSideberOpen(false)} />
      </div>
      <div className="flex flex-row justify-center gap-10">
        <div className=" flex flex-col justify-center items-center gap-0 ">
          <Basecard imagen={"/mascotas.png"} title={"mascotas"}>
            <div className=" flex flex-row justify-around items-center font-bold bg-bank5 text-white top-0">
              <SmallText text={"Dia especial para mascotas!"} />
            </div>
            <SmallText
              text={
                "Celebra el amor por nuestros peludos amigos con una jornada llena de diversión, juegos y premios para tus mascotas. Habrá concursos, fotos especiales, consejos de cuidado y mucho más. ¡Trae a tu compañero de cuatro patas y disfruten juntos de este día inolvidable!"
              }
            />
            <div className="font-black text-center mt-4">
              <SmallText
                text={
                  "¡TODO EL DIA! SABADO 25 Y DOMINGO 26  Porque ellos son parte de la familia!"
                }
              />
            </div>
          </Basecard>
        </div>
        <div className=" flex flex-col justify-center items-center gap-0 ">
          <Basecard imagen={"/mascotas.png"} title={"mascotas"}>
            <div className=" flex flex-row justify-around items-center font-bold bg-bank5 text-white top-0">
              <SmallText text={"Dia especial para mascotas!"} />
            </div>
            <SmallText
              text={
                "Celebra el amor por nuestros peludos amigos con una jornada llena de diversión, juegos y premios para tus mascotas. Habrá concursos, fotos especiales, consejos de cuidado y mucho más. ¡Trae a tu compañero de cuatro patas y disfruten juntos de este día inolvidable!"
              }
            />
            <div className="font-black text-center mt-4">
              <SmallText
                text={
                  "¡TODO EL DIA! SABADO 25 Y DOMINGO 26  Porque ellos son parte de la familia!"
                }
              />
            </div>
          </Basecard>
        </div>
        <div className=" flex flex-col justify-center items-center gap-0 ">
          <Basecard imagen={"/mascotas.png"} title={"mascotas"}>
            <div className=" flex flex-row justify-around items-center font-bold bg-bank5 text-white top-0">
              <SmallText text={"Dia especial para mascotas!"} />
            </div>
            <SmallText
              text={
                "Celebra el amor por nuestros peludos amigos con una jornada llena de diversión, juegos y premios para tus mascotas. Habrá concursos, fotos especiales, consejos de cuidado y mucho más. ¡Trae a tu compañero de cuatro patas y disfruten juntos de este día inolvidable!"
              }
            />
            <div className="font-black text-center mt-4">
              <SmallText
                text={
                  "¡TODO EL DIA! SABADO 25 Y DOMINGO 26  Porque ellos son parte de la familia!"
                }
              />
            </div>
          </Basecard>
        </div>
      </div>
    </div>
  );
};

export default Page;

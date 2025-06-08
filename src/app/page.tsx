import { HeroTitle, SmallText } from "@/components/atoms/heroTitles/page";
import React from "react";
import { LoginApps, LoginBar } from "@/components/atoms/checkings/page";
import { PersonalizeButtom } from "@/components/atoms/buttons/page";

function page() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-3/6 h-full">
        <img
          className="w-full h-full object-cover"
          src="img-loginn.png"
          alt=""
          width="full"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-3/6">
      <div className={`flex flex-col justify-center items-center border-2 border-gray-50 shadow-md p-7`}>
        <div className="font-bold">
          <HeroTitle text="Login" />
        </div>
        <div className="flex flex-col gap-5">
          <LoginBar textSm="ejems@exam.com" title="E-mail" />
          <LoginBar textSm="**********" title="Contraseña" />
        </div>
        <div className="ml-28 opacity-50 mb-6">
          <SmallText text="¿Olvidaste tu contraseña?" />
        </div>
        <div className="flex flex-row h-5 items-center gap-5">
          <div className="h-[2] w-33 bg-black"></div>
          <div>
            <SmallText text="O" />
          </div>
          <div className="h-[2] w-33 bg-black"></div>
        </div>
        <div className="flex flex-col gap-2">
          <LoginApps
            icon="flat-color-icons:google"
            textSm=" continuar Con Google"
            color="#0559c1"
          />
          <LoginApps
            icon="entypo-social:facebook"
            textSm=" continuar Con Facebook"
            color="#0559c1"
          />
        </div>
        <div className="mt-10">
          <button>
            <a href="/pruebas">
            <PersonalizeButtom
              text="Acceder"
              colorButtom="black"
              colorText="white"
            />
            </a>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default page;

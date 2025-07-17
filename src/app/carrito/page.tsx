'use client';
import React from "react";
import { useState } from "react";
import Navbar from "@/components/organismos/Navbar/page";
import Sidebar from "@/components/organismos/Sidebar/page";
import Icon from '@/components/atoms/icon/page'
import Buttons from '@/components/atoms/buttons/page'


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

      <div className="flex flex-row">
        <div className="w-2/3">
          <div className="flex flex-row gap-5 m-5 h-40 border-2 items-center border-gray-400 shadow-md">
            <img src="/jugo.png" alt="" className="h-30 w-40 ml-5 rounded-3xl" />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">JUGO</h3>
              <h3>JUGO DE MORA EN AGU CON 50 GR DE  AZUCAR AÑADIDO</h3>
              <div className="flex flex-row gap-2 items-center">

                <div className=" text-white">
                  <Buttons title={"Eliminar"} link={""} icon={""} bgColor="bg-bank2" />
                </div>

                <div className="border-2 border-black h-10 w-25 rounded-2xl flex justify-center items-center">
                  <div className="flex flex-row gap-4">
                    <Icon icon="lucide:circle-minus" className="cursor-pointer" />
                    <p>1</p>
                    <Icon icon="lucide:circle-plus" className="text-blue-400 cursor-pointer"></Icon>
                  </div>
                </div>
                <h3 className="font-bold ml-8">$5000</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5 m-5 h-40 border-2 items-center border-gray-400 shadow-md">
            <img src="/jugo.png" alt="" className="h-30 w-40 ml-5 rounded-3xl" />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">JUGO</h3>
              <h3>JUGO DE MORA EN AGU CON 50 GR DE  AZUCAR AÑADIDO</h3>
              <div className="flex flex-row gap-2 items-center">
                <div className=" text-white">
                  <Buttons title={"Eliminar"} link={""} icon={""} bgColor="bg-bank2" />
                </div>

                <div className="border-2 border-black h-10 w-25 rounded-2xl flex justify-center items-center">
                  <div className="flex flex-row gap-4">
                    <Icon icon="lucide:circle-minus" className="cursor-pointer" />
                    <p>1</p>
                    <Icon icon="lucide:circle-plus" className="text-blue-400 cursor-pointer"></Icon>
                  </div>
                </div>
                <h3 className="font-bold ml-8">$5000</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5 m-5 h-40 border-2 items-center border-gray-400 shadow-md">
            <img src="/jugo.png" alt="" className="h-30 w-40 ml-5 rounded-3xl" />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">JUGO</h3>
              <h3>JUGO DE MORA EN AGU CON 50 GR DE  AZUCAR AÑADIDO</h3>
              <div className="flex flex-row gap-2 items-center">
                <div className=" text-white">
                  <Buttons title={"Eliminar"} link={""} icon={""} bgColor="bg-bank2" />
                </div>

                <div className="border-2 border-black h-10 w-25 rounded-2xl flex justify-center items-center">
                  <div className="flex flex-row gap-4">
                    <Icon icon="lucide:circle-minus" className="cursor-pointer" />
                    <p>1</p>
                    <Icon icon="lucide:circle-plus" className="text-blue-400 cursor-pointer"></Icon>
                  </div>
                </div>
                <h3 className="font-bold ml-8">$5000</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="border-2 m-5 rounded-2xl">
            <div className="font-bold flex justify-center"><h3>Resumen de compra</h3></div>
            <div className="h-0.5 bg-gray-500"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-row gap-20 mt-5">
                <h3>Producto 1</h3>
                <p>$5000</p>
              </div>
              <div className="flex flex-row gap-20">
                <h3>Producto 1</h3>
                <p>$5000</p>
              </div>
              <div className="flex flex-row gap-20">
                <h3>Producto 1</h3>
                <p>$5000</p>
              </div>
              <div className="flex flex-row gap-27 mt-3">
                <h3 className="font-bold">Total</h3>
                <p className="font-bold">$15000</p>
              </div>
            </div>
            <div className="flex justify-center  m-4">
              
              <Buttons title={"Pagar"} link={""} icon={""} bgColor="bg-bank6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

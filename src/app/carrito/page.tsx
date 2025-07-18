"use client";
import React, { useState } from "react";
import Navbar from "@/components/organismos/Navbar/page";
import Sidebar from "@/components/organismos/Sidebar/page";
import Icon from "@/components/atoms/icon/page";
import Buttons from "@/components/atoms/buttons/page";

const Page = () => {
  const [sidebarOpen, setSideberOpen] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // No bajar de 1

  const increment1 = () => setQuantity1((prev) => prev + 1);
  const decrement1 = () => setQuantity1((prev) => (prev > 1 ? prev - 1 : 1)); // No bajar de 1

  const increment2 = () => setQuantity2((prev) => prev + 1);
  const decrement2 = () => setQuantity2((prev) => (prev > 1 ? prev - 1 : 1)); // No bajar de 1

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
            <img
              src="/jugo.png"
              alt=""
              className="h-30 w-40 ml-5 rounded-3xl"
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">JUGO</h3>
              <h3>JUGO DE MORA EN AGUA CON 50 GR DE AZUCAR AÑADIDO</h3>
              <div className="flex flex-row gap-2 items-center">
                <div className=" text-white">
                  <Buttons
                    title={"Eliminar"}
                    link={""}
                    icon={""}
                    bgColor="bg-bank2"
                  />
                </div>
                <div className="border-2 border-black h-10 w-25 rounded-2xl flex justify-center items-center">
                  <div className="flex flex-row gap-4">
                    <div onClick={decrement}>
                      <Icon
                        icon="lucide:circle-minus"
                        className="cursor-pointer"
                      />
                    </div>
                    <p>{quantity}</p>
                    <div onClick={increment}>
                      <Icon
                        icon="lucide:circle-plus"
                        className="text-blue-400 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="font-bold ml-8">${7000 * quantity}</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5 m-5 h-40 border-2 items-center border-gray-400 shadow-md">
            <img
              src="/cafe.png"
              alt=""
              className="h-30 w-40 ml-5 rounded-3xl"
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">CAFE</h3>
              <h3>CAFE CON CUALQUIER INGREDIENTE 80 ML</h3>
              <div className="flex flex-row gap-2 items-center">
                <div className=" text-white">
                  <Buttons
                    title={"Eliminar"}
                    link={""}
                    icon={""}
                    bgColor="bg-bank2"
                  />
                </div>
                <div className="border-2 border-black h-10 w-25 rounded-2xl flex justify-center items-center">
                  <div className="flex flex-row gap-4">
                    <div onClick={decrement1}>
                      <Icon
                        icon="lucide:circle-minus"
                        className="cursor-pointer"
                      />
                    </div>
                    <p>{quantity1}</p>
                    <div onClick={increment1}>
                      <Icon
                        icon="lucide:circle-plus"
                        className="text-blue-400 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="font-bold ml-8">${5000 * quantity1}</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5 m-5 h-40 border-2 items-center border-gray-400 shadow-md">
            <img
              src="/limonada.png"
              alt=""
              className="h-30 w-40 ml-5 rounded-3xl"
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">LIMONADA</h3>
              <h3>LIMONADA DE CUALQUIER SABOR CON 50 GR DE AZUCAR AÑADIDA</h3>
              <div className="flex flex-row gap-2 items-center">
                <div className=" text-white">
                  <Buttons
                    title={"Eliminar"}
                    link={""}
                    icon={""}
                    bgColor="bg-bank2"
                  />
                </div>
                <div className="border-2 border-black h-10 w-25 rounded-2xl flex justify-center items-center">
                  <div className="flex flex-row gap-4">
                    <div onClick={decrement2}>
                      <Icon
                        icon="lucide:circle-minus"
                        className="cursor-pointer"
                      />
                    </div>
                    <p>{quantity2}</p>
                    <div onClick={increment2}>
                      <Icon
                        icon="lucide:circle-plus"
                        className="text-blue-400 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="font-bold ml-8">${6000 * quantity2}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="border-2 m-5 rounded-2xl">
            <div className="font-bold flex justify-center">
              <h3>Resumen de compra</h3>
            </div>
            <div className="h-0.5 bg-gray-500"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-col gap-2 mt-5">
                <div className="flex flex-row gap-5">
                  <h3>Producto 1</h3>
                  <p className="font-bold">${7000 * quantity}</p>
                </div>
                <div className="flex flex-row gap-5">
                  <h3>Producto 2</h3>
                  <p className="font-bold">${5000 * quantity1}</p>
                </div>
                <div className="flex flex-row gap-5">
                  <h3>Producto 3</h3>
                  <p className="font-bold">${6000 * quantity2}</p>
                </div>
              </div>
              <div className="flex flex-row gap-27 mt-3">
                <h3 className="font-bold">Total</h3>
                <p className="font-bold">
                  ${(5000 * quantity1) + (7000 * quantity) + (6000 * quantity2)}
                </p>
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

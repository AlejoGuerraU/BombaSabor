import React from "react";
import { SmallText } from "../heroTitles/page";
import Buttons from "@/components/atoms/buttons/page";

interface Product {
  label: string;
  image: string;
  description: string;
  price: string;
}

interface CardDetailProps {
  product: Product;
  onClose: () => void;
}

const CardDetail = ({ product, onClose }: CardDetailProps) => {
  if (!product) return null;

  return (
    <div className="bg-white p-6 rounded-2xl w-96 shadow-2xl relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
        aria-label="Cerrar"
      >
        ✕
      </button>

      <div className="mb-4">
        <img
          src={product.image}
          alt={product.label}
          className="rounded-xl w-full h-48 object-cover"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="font-bold">
          <SmallText text={product.description} />
        </div>
        <div className="font-bold flex flex-row justify-between items-center">
          <SmallText text={product.price} />
          <Buttons
            title={"Añadir"}
            link={"/carrito"}
            icon={""}
            bgColor="bg-bank4"
          />
        </div>
      </div>
    </div>
  );
};

export default CardDetail;

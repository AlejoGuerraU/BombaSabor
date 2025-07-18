"use client";
import React, { useState } from "react";
import Navbar from "@/components/organismos/Navbar/page";
import Sidebar from "@/components/organismos/Sidebar/page";
import { SmallText } from "@/components/atoms/heroTitles/page";
import CardCategories from "@/components/organismos/cardCategories/page";
import CardDetail from "@/components/atoms/simpleCard/page";

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Definición de los productos
  const products: Product[] = [
    {
      label: "CAFÉ",
      image: "/cafe.png",
      description: "Café 100% colombiano, recién molido",
      price: "$5000",
    },
    {
      label: "LIMONADA",
      image: "/limonada.png",
      description: "Limonada natural con hierbabuena",
      price: "$6000",
    },
    {
      label: "TÉ",
      image: "/te.png",
      description: "Té verde orgánico, refrescante y saludable",
      price: "$5500",
    },
    {
      label: "MALTEADA",
      image: "/malteadas.jpg",
      description: "Malteada cremosa de chocolate",
      price: "$12000",
    },
    {
      label: "GASEOSAS",
      image: "/gaseosas.jpg",
      description: "Variedad de gaseosas frías y refrescantes",
      price: "$4000",
    },
    {
      label: "JUGOS",
      image: "/jugo.png",
      description: "Jugos naturales de frutas frescas",
      price: "$7000",
    },
  ];

  type Product = {
    label: string;
    image: string;
    description: string;
    price: string;
  };

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
    setShowDetail(true);
  };

  const handleClose = () => {
    setShowDetail(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="flex flex-row justify-center items-center gap-0.5">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
      </div>
      <div className="flex flex-col justify-start items-start">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>

      <div className="flex justify-center items-center font-bold">
        <SmallText text="BEBIDAS" />
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-3 gap-10 justify-items-center ">
        {products.map((product) => (
          <CardCategories
            key={product.label}
            image={product.image}
            label={product.label}
            onClick={() => handleCardClick(product)}
          />
        ))}
      </div>

      {/* Modal con el detalle del producto */}
      {showDetail && selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <CardDetail product={selectedProduct} onClose={handleClose} />
        </div>
      )}
    </div>
  );
};

export default Page;

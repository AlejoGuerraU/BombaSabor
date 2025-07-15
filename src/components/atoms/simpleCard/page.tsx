import React from "react"
import { SmallText } from "../heroTitles/page"
import Buttons from '@/components/atoms/buttons/page'

interface CardDetailProps {
  category: string
  onClose: () => void
}

const Page = ({ category, onClose }: CardDetailProps) => {
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
        <img src="/jugo.png" alt={category} className="rounded-xl w-full h-48 object-cover" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="font-bold">
          <SmallText text="Jugo con fruta 100% natural con 50 gr de azúcares añadidos" />
        </div>
        <div className="font-bold flex flex-row justify-between items-center">
          <SmallText text="$5000" />
          <Buttons title={"Añadir"} link={"/carrito"} icon={""} bgColor="bg-bank4" />
        </div>
      </div>
    </div>
  )
}

export default Page

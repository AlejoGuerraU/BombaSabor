import React from 'react'
import Buttons from '@/components/atoms/buttons/page'
import Icon from '@/components/atoms/icon/page'

interface sideProps {
  isOpen: boolean
  onClose: () => void
}

const Page = ({ isOpen, onClose }: sideProps) => {
  if (!isOpen) return null
  return (
    <div className="flex flex-col fixed top-0 left-0 z-50 h-screen w-64 bg-amber-100 p-6 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}">
      
      <div className="flex justify-start mb-4">
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-amber-200 transition-colors"
          aria-label="Cerrar menú"
        >
          <Icon icon="material-symbols:close-rounded" className="text-black w-6 h-6 transition-transform hover:scale-105" />
        </button>
      </div>

      {/* Navegación principal */}
      <nav className="flex flex-col gap-3 mb-6">
        <Buttons title="Categorías" link="/categorias" bgColor="bg-white" icon="ic:twotone-menu-book" />
        <Buttons title="Promociones" link="/promociones" bgColor="bg-white" icon="foundation:burst-sale" iconColor="text-red-500" />
        <Buttons title="Eventos" link="/eventos" bgColor="bg-white" icon="mdi:events" />
      </nav>

      {/* Otras plataformas */}
      <div className="mt-auto text-center">
        <span className="block text-black mb-2">Encuéntranos también en:</span>
        <div className="flex flex-col gap-2 items-center">
          <Buttons title="Android" link="#" bgColor="bg-white" icon="qlementine-icons:android-24" iconColor="text-green-500" />
          <Buttons title="iOS" link="#" bgColor="bg-white" icon="lineicons:ios" iconColor="text-black" />
        </div>
      </div>
    </div>
  )
}

export default Page
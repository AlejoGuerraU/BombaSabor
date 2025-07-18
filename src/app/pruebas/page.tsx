'use client';
import React, { useState } from 'react';
import Navbar from '@/components/organismos/Navbar/page';
import Sidebar from '@/components/organismos/Sidebar/page';
import Buttons from '@/components/atoms/buttons/page';
import { SmallText } from '@/components/atoms/heroTitles/page';
import { MediumTitle } from '@/components/atoms/heroTitles/page';

const Page = () => {
  const [sidebarOpen, setSideberOpen] = useState(false);
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="flex justify-center items-center">
        <Navbar onMenuClick={() => setSideberOpen(true)} />
      </div>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSideberOpen(false)} />

      <div className="flex flex-row h-full w-full">
        <div className="relative flex-1">
          <img src="/inicio.png" alt="hamburguesa imagen" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-center font-bold">
            <MediumTitle text={'Precios espciales'} />
            <Buttons title="Ver Categorías" link="/categorias" icon="" bgColor='bg-bank1' />
          </div>
        </div>
        <div className="relative flex-1">
          <img src="/centro.png" alt="evento imagen" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-center font-bold">
            <MediumTitle text={'Eventos especiales'} />
            <Buttons title="Ver Eventos" link="/eventos" icon="" bgColor='bg-bank1' />
          </div>
        </div>
        <div className="relative flex-1">
          <img src="/final.png" alt="sala imagen" className="w-full h-full object-cover" />
          <div className='absolute inset-0 flex flex-col justify-center items-center  '>

            <div className='font-bold'><MediumTitle text={'HORARIOS'} /></div>
            <div className='bg-bank1'>

              <SmallText text={'Lunes: 1pm a 12pm '} />
              <SmallText text={'Martes: 1pm a 12pm'} />
              <SmallText text={'Miercoles:1pm a 12pm'} />
              <SmallText text={'Jueves: 1pm a 12pm'} />
              <SmallText text={' Viernes 1pm a 12pm'} />
              <SmallText text={'Sabados y Domingo 12pm a 12pm'} />
              <SmallText text={'Actividades Especiales: 10am a 12pm Te esperamos!'} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

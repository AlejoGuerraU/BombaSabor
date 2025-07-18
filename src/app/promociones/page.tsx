'use client';
import React, { useState } from 'react'
import Navbar from '@/components/organismos/Navbar/page'
import Sidebar from '@/components/organismos/Sidebar/page'
import { SmallText } from '@/components/atoms/heroTitles/page';
import Basecard from '@/components/organismos/baseCard/page'
import Buttons from '@/components/atoms/buttons/page'


const Page = () => {
  const [sidebarOpen, setSideberOpen] = useState(false)
  return (
    <div>
      <div className=' flex flex-row justify-center items-center gap-0.5 '>
        <Navbar onMenuClick={() => setSideberOpen(true)} />
      </div>
      <div className=' flex flex-col justify-start items-start'>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSideberOpen(false)} />
      </div>
      <div className=' flex justify-center font-bold'><SmallText text={'Promociones'} /></div>
      <div className=' flex flex-row justify-around items-center'>
        <div className=' flex flex-col justify-center '>
          <Basecard imagen={'/jugo.png'} title={'jugo imagen'} >
            <SmallText text={'Hamburguesa + papas + Cocacolar'} />
            <div className=' flex flex-row justify-around items-center font-bold'>
              <SmallText text={'$25000'} />
              <div className=' w-25'>
                <Buttons title={'Pedir'} link={'/carrito'} icon={''} bgColor='bg-bank4' />
              </div>
            </div>
          </Basecard >
        </div>


        <div className=' flex flex-col justify-center '>
          <Basecard imagen={'/jugo.png'} title={'jugo imagen'} >
            <SmallText text={'Hamburguesa + papas + Cocacolar'} />
            <div className=' flex flex-row justify-around items-center font-bold'>
              <SmallText text={'$25000'} />
              <div className=' w-25'>
                <Buttons title={'Pedir'} link={'/carrito'} icon={''} bgColor='bg-bank4' />
              </div>
            </div>
          </Basecard >
        </div>

        <div className=' flex flex-col justify-center '>
          <Basecard imagen={'/jugo.png'} title={'jugo imagen'} >
            <SmallText text={'Hamburguesa + papas + Cocacolar'} />
            <div className=' flex flex-row justify-around items-center font-bold'>
              <SmallText text={'$25000'} />
              <div className=' w-25'>
                <Buttons title={'Pedir'} link={'/carrito'} icon={''} bgColor='bg-bank4' />
              </div>
            </div>
          </Basecard >
        </div>     
      </div>

      <div className=' flex flex-row justify-around items-center mt-10'>
        <div className=' flex flex-col justify-center '>
          <Basecard imagen={'/jugo.png'} title={'jugo imagen'} >
            <SmallText text={'Hamburguesa + papas + Cocacolar'} />
            <div className=' flex flex-row justify-around items-center font-bold'>
              <SmallText text={'$25000'} />
              <div className=' w-25'>
                <Buttons title={'Pedir'} link={'/carrito'} icon={''} bgColor='bg-bank4' />
              </div>
            </div>
          </Basecard >
        </div>


        <div className=' flex flex-col justify-center '>
          <Basecard imagen={'/jugo.png'} title={'jugo imagen'} >
            <SmallText text={'Hamburguesa + papas + Cocacolar'} />
            <div className=' flex flex-row justify-around items-center font-bold'>
              <SmallText text={'$25000'} />
              <div className=' w-25'>
                <Buttons title={'Pedir'} link={'/carrito'} icon={''} bgColor='bg-bank4' />
              </div>
            </div>
          </Basecard >
        </div>

        <div className=' flex flex-col justify-center '>
          <Basecard imagen={'/jugo.png'} title={'jugo imagen'} >
            <SmallText text={'Hamburguesa + papas + Cocacolar'} />
            <div className=' flex flex-row justify-around items-center font-bold'>
              <SmallText text={'$25000'} />
              <div className=' w-25'>
                <Buttons title={'Pedir'} link={'/carrito'} icon={''} bgColor='bg-bank4' />
              </div>
            </div>
          </Basecard >
        </div>     
      </div>
      
    </div>
  )
}

export default Page

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
    <div className={`flex flex-col gap-3  fixed top-0 left-0 z-50 h-screen w-64 bg-amber-100 p-10 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      
      <div className='flex flex-col gap-3 mb-6'>
        <button className=' flex flex-col justify-around items-start cursor-pointer'
          onClick={onClose}>
          <Icon icon={'material-symbols:close-rounded'} className={'text-black'} />
        </button>

        <Buttons title={'Categorias'} link={''} bgColor={'bg-white'} icon={'ic:twotone-menu-book'} />
        <Buttons title={'Promociones'} link={''} bgColor={'bg-white'} icon={'foundation:burst-sale'} iconColor='text-red-500' />
        <Buttons title={'Eventos'} link={''} bgColor={'bg-white'} icon={'mdi:events'} />
      </div>

      <div className=' flex flex-col justify-end items-center'>
        <span className='text-black'>
          Encuentranos tambien en:
        </span>
        <Buttons title={'Android'} link={''} bgColor={'bg-white'} icon={'qlementine-icons:android-24'} iconColor='text-green-500' />
        <Buttons title={'Android'} link={''} bgColor={'bg-white'} icon={'lineicons:ios'} iconColor='text-black' />
      </div>
    </div>
  )
}

export default Page
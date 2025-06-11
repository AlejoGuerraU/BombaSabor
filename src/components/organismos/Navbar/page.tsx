import React from 'react'
import Icon from '@/components/atoms/icon/page'

interface openSidebar{
    onMenuClick: ()=> void;
}

const Page = ({onMenuClick}:openSidebar) => {
    return (
        <div className='relative z-40 flex justify-around items-center h-15 w-full bg-bank1'>
            <button className='cursor-pointer' onClick={onMenuClick}>
                <Icon icon={'material-symbols:menu-rounded'} className='text-black' />
            </button>
            <div className=' flex justify-center items-center gap-2'>
                <img src="logo.png" alt="logo del restaurante" width={40} height={40} />
                <h1 className='text-black font-bold text-2xl'>Bomba Sabor</h1>
            </div>
            <button className='cursor-pointer'>
                <Icon icon={'material-symbols:shopping-cart-outline'} className='text-[#FF5A5F]' />
                <Icon icon={''} />
            </button>
        </div>
    )
}

export default Page
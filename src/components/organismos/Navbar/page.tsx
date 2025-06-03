import React from 'react'
import Icon from '@/components/atoms/icon/page'

const Page = () => {
    return (
        <div className='flex justify-around items-center h-15 w-full bg-bank1'>
            <button className='cursor-pointer'>
                <Icon icon={'material-symbols:menu-rounded'} color={'black'} />
            </button>
            <h1 className='text-bank2 font-bold text-2xl'>Bomba Sabor</h1>
            <button>
                <Icon icon={'material-symbols:shopping-cart-outline'} color={'#FF5A5F'} />
            </button>
        </div>
    )
}

export default Page
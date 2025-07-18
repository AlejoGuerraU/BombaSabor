'use client'
import React from 'react'
import { useState } from 'react'
import Navbar from '@/components/organismos/Navbar/page'
import Sidebar from '@/components/organismos/Sidebar/page'
import CardCategories from '@/components/organismos/cardCategories/page'

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

            <div className='flex justify-center items-center font-bold'>
                <span> <strong> CATEGORIAS </strong></span>

            </div>
            <div className=' flex flex-col gap-4'>
                <div className=' flex flex-row justify-around items-center'>
                    <CardCategories image={'/jugo.png'} label={'BEBIDAS'} href={'/menu/bebidas'} />
                    <CardCategories image={'/jugo.png'} label={'BEBIDAS'} href={'/menu/bebidas'} />
                    <CardCategories image={'/jugo.png'} label={'BEBIDAS'} href={'/menu/bebidas'} />
                </div>
                <div className=' flex flex-row justify-around items-center'>
                    <CardCategories image={'/jugo.png'} label={'BEBIDAS'} href={'/menu/bebidas'} />
                    <CardCategories image={'/jugo.png'} label={'BEBIDAS'} href={'/menu/bebidas'} />
                    <CardCategories image={'/jugo.png'} label={'BEBIDAS'} href={'/menu/bebidas'} />
                </div>
            </div>

        </div>
    )
}

export default Page
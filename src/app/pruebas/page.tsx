'use client';
import React, {useState} from 'react'
import Navbar from '@/components/organismos/Navbar/page'
import Sidebar from '@/components/organismos/Sidebar/page'


const Page = () => {
  const[sidebarOpen, setSideberOpen]= useState(false)
  return (
    <div>
      <div className=' flex flex-row justify-center items-center gap-0.5 '>
        <Navbar onMenuClick={()=>setSideberOpen(true)}/>
      </div>
      <div className=' flex flex-col justify-start items-start'>
        <Sidebar isOpen={sidebarOpen} onClose={() =>setSideberOpen(false)} />
      </div>
    </div>
  )
}

export default Page

import React from 'react'
import Icon from '@/components/atoms/icon/page'


interface Indexprops {
  title: string
  link: string
  color: string
  icon: string

}

const Page = ({ title, link, color, icon }: Indexprops) => {
  return (
    <div className={`flex  items-center h-10 w-100 rounded-4xl  text-black font-bold cursor-pointer ${color}`}>
      <a href={link}></a>
      <div className=' flex justify-start items-center'>
        <Icon icon={icon} color={'bg-bank1'} />
      </div>
      <div className='flex justify-center'>
        {title}
      </div>

    </div>

  )
}

export default Page
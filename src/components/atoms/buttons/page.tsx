import React from 'react'
import Icon from '@/components/atoms/icon/page'


interface Indexprops {
  title: string
  link: string
  bgColor?: string
  icon: string
  iconColor?: string

}

const Page = ({ title, link, bgColor, icon, iconColor }: Indexprops) => {
  return (
    <div className={`flex items-center h-10  rounded-2xl  text-black  shadow-2xl font-bold cursor-pointer ${bgColor}`}>
      <a href={link}></a>
      <div className=' flex justify-start items-center'>
        <Icon icon={icon} className={`fill-current ${iconColor}`} />
      </div>
      <div className='flex justify-center'>
        {title}
      </div>

    </div>

  )
}

export default Page
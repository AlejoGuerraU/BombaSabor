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
    <a
      href={link}
      className={`flex items-center gap-2 px-4 h-10 rounded-2xl font-bold shadow-2xl cursor-pointer transition-transform hover:scale-105 ${bgColor}`}
      title={title}
    >
      <Icon icon={icon} className={`w-5 h-5 ${iconColor}`} />
      <span>{title}</span>
    </a>

  )
}

export default Page
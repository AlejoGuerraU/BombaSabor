import React from 'react'
import { Icon } from '@iconify/react'

interface IconProps {
  icon: string
  className?: string 
}

const Page = ({ icon, className = '' }: IconProps) => {
  return <Icon icon={icon} className={className} width="24" height="24" />
}

export default Page

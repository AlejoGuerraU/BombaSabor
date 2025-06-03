import React from 'react'
import { Icon } from "@iconify/react";

const Page = ({icon, color}:{icon: string, color:string}) => {
  return (
    <Icon icon={icon} color= {color} width="24" height="24" />
  )
}

export default Page
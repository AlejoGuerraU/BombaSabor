import React from 'react'
import { Icon } from "@iconify/react";

const Page = ({icon}:{icon: string}) => {
  return (
    <Icon icon={`${icon}`} width="24" height="24" />
  )
}

export default Page
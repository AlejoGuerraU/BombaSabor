import React from 'react'

interface Indexprops{
    title: string
}

const Page = ({title}:Indexprops) => {
  return (
    <div>
        {title}
    </div>
  )
}

export default Page
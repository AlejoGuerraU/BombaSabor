import React from 'react'

interface indexProps{
 imagen: string
 title:string
 children?: React.ReactNode;

}

const Page = ({imagen, title ,children}:indexProps) => {
  return (
    <div className="bg-white p-4 rounded-2xl w-80 shadow-md">
      <img src={imagen} alt={title} className="rounded-xl w-full h-48 object-cover" />
      <div className="mt-4 font-bold text-center">
      </div>
      {children && <div className="mt-4">{children}</div>}
    </div>
  )
}

export default Page
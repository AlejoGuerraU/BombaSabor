import React from 'react'
import Link from 'next/link'
import { SmallText } from '@/components/atoms/heroTitles/page'

interface CategoryCardProps {
    image: string
    label: string
    href?: string
    onClick?: () => void
}
const CategoryCard = ({ image, label, href, onClick }: CategoryCardProps) => {
    if (href && onClick) {
        console.warn("CategoryCard: No se recomienda usar href y onClick al mismo tiempo.")
    }

    const content = (
        <div className="w-80 border-2 border-gray-100 shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-105 cursor-pointer">
            <img src={image} alt={label} className="w-full h-48 object-cover" />
            <div className="font-bold p-3 flex justify-center items-center bg-white">
                <SmallText text={label} />
            </div>
        </div>
    )

    if (href) {
        return (
            <Link href={href} className="block">
                {content}
            </Link>
        )
    }

    return (
        <button onClick={onClick} className="p-0 text-left">
            {content}
        </button>
    )
}
export default CategoryCard 


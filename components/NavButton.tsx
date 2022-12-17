import React from 'react'

type Props = {
    title: string,
    isActive?: boolean
    onClick?: () => void
}

function NavButton({ title, isActive, onClick }: Props) {
    return (
        <button onClick={onClick} className={`text-white font-bold py-2 px-2 rounded ${isActive && 'bg-emerald-800'} hover:bg-emerald-800`}>{title}</button>
    )
}

export default NavButton
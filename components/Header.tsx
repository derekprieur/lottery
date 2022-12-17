import React from 'react'
import NavButton from './NavButton'
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import { useAddress, useDisconnect } from '@thirdweb-dev/react'

function Header() {
    const address = useAddress()
    const disconnect = useDisconnect()

    return (
        <header className='grid grid-cols-2 md:grid-cols-5 justify-between items-center bg-gradient-to-b from-stone-800 to-stone-700 px-4 py-2'>
            <div className='flex items-center space-x-2'>
                <img className='rounded-full h-16 w-16' src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/79585/four-leaf-clover-clipart-xl.png" alt="" />
                <div>
                    <h1 className='text-lg text-white font-bold'>LUCKY DRAW</h1>
                    <p className='text-xs text-emerald-500 truncate'>User: {address?.substring(0, 5)}...{address?.substring(address.length, address.length - 5)}</p>
                </div>
            </div>
            <div className='hidden md:flex items-center justify-center rounded-md md:col-span-3'>
                <div className='p-4 space-x-2'>
                    <NavButton title='Buy Tickets' isActive />
                    <NavButton onClick={disconnect} title='Logout' />
                </div>
            </div>
            <div className='flex flex-col ml-auto text-right'>
                <Bars3BottomRightIcon className='h-8 w-8 mx-auto text-white cursor-pointer' />
                <span className='md:hidden'>
                    <NavButton onClick={disconnect} title='Logout' />
                </span>
            </div>
        </header>
    )
}

export default Header
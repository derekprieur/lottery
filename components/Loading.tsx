import React from 'react'
import { PropagateLoader } from 'react-spinners'

function Loading() {
    return (
        <div className='bg-stone-800 h-screen flex flex-col items-center justify-center'>
            <div className='flex items-center space-x-2 mb-10'>
                <img className='rounded-full h-20 w-20' src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/79585/four-leaf-clover-clipart-xl.png" alt="" />
                <h1 className='text-lg text-white font-bold'>Loading LUCKY DRAW</h1>
            </div>
            <PropagateLoader color='#fff' size={30} />
        </div>
    )
}

export default Loading
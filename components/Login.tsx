import { useMetamask } from '@thirdweb-dev/react'
import React from 'react'

function Login() {
    const connectWithMetamask = useMetamask()
    return (
        <div className='bg-stone-800 min-h-screen flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center mb-10 text-center'>
                <img className='rounded-full h-56 w-56 mb-10' src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/79585/four-leaf-clover-clipart-xl.png" alt="" />
                <h1 className='text-6xl text-white font-bold'>LUCKY DRAW</h1>
                <h2 className='text-white mt-5'>Get started by logging in with you MetaMask account</h2>
                <button onClick={connectWithMetamask} className='bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold'>Login with MetaMask</button>
            </div>
        </div>
    )
}

export default Login
'use client'

import React , { useContext } from 'react'
import { UIContext } from '@/context/UiContext'

const Navbar = () => {

    const { toggleSidebar } = useContext(UIContext)
  return (
    <header className='flex justify-between items-center p-4 shadow text-white bg-gray-900'>
        <button
            onClick={toggleSidebar}
            className='bg-gray-50 text-black px-3 py-2 rounded-md cursor-pointer hover:bg-gray-900 hover:text-gray-50 transition'
        >
            Toggle Menu
        </button>
        <h1 className='font-bold'>
            Admin Dashboard
        </h1>
    </header>
  )
}

export default Navbar
'use client'

import Link from 'next/link'
import { useContext } from 'react'
import { UIContext } from '@/context/UiContext'
import { HomeIcon , UsersIcon , ClipboardDocumentCheckIcon} from '@heroicons/react/24/outline'

const Sidebar = () => {

    const { sidebarOpen } = useContext(UIContext)

    // if (!sidebarOpen) return null

  return (
    <aside className={`${sidebarOpen ? "w-64" : "w-24"} transition bg-gray-900 text-white min-h-screen p-6 shadow`}>
        <h2 className={`${sidebarOpen ? "text-3xl" : "text-sm"}  font-bold`}>Admin Panel</h2>

        <nav className='space-y-4 flex flex-col mt-10'>
            <Link href="/">
               {sidebarOpen ? "Dashboard" : <HomeIcon className='size-6'/>}  
               
            </Link>
            <Link href="/users">
                {sidebarOpen ? "Users" : <UsersIcon className='size-6' />}
            </Link>
            <Link href="/invoices">
                {sidebarOpen ? "Invoices" : <ClipboardDocumentCheckIcon className='size-6'/>}
            </Link>
        </nav>
    </aside>
  )
}

export default Sidebar
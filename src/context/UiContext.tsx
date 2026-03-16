'use client'

import { createContext , useContext , useState} from 'react'

interface UIContextType {
    sidebarOpen : boolean
    toggleSidebar : () => void
}

export const UIContext = createContext<UIContextType>({
    sidebarOpen : true,
    toggleSidebar : () => {}
})


export const UIProvider = ({children} : {children : React.ReactNode}) => {

const [sidebarOpen , setSidebarOpen] = useState(true)

const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
}

    return (
        <UIContext.Provider value={{sidebarOpen , toggleSidebar}}>
            {children}
        </UIContext.Provider>
    )
}
import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../Component/Navigation/SideBar'
import Header from '../Component/Navigation/Header'

function Layout() {
    return (
       <div className='overflow-clip h-screen w-screen'>
        <Header/>
        <div className='grid grid-cols-12 h-full '>
            <div className='col-span-2'>
                <SideBar/>
            </div>
            <div className='relative col-span-10 overflow-scroll pb-44  ml-4'>
                <Outlet/>
            </div>
        </div>

       </div>
    )
}

export default Layout

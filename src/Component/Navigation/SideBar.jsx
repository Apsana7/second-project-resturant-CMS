import React from 'react'
import { Link } from 'react-router-dom';


function SideBar() {
    const Pages = [
        {
            icon:"",
            title:"Home",
            path:'/'
        },
        {
            title:"About",
            path:'/About'
        },
        {
            title:"Menu",
            path:"/Menu"
        },
        {
            title:"Stories",
            path:"/Stories"
        },
        {
            title:"Contact",
            path:"/Contact"
        },
       
    ]
    const Layout = [
        {
            title:"Menu",
            path:"/Menu"
        }
    ]
  return (
    <div className='w-60 h-lvh  bg-amber-100  border-gray-300 flex justify-center py-6'>
       <div className='flex flex-col gap-10 items-center '>
       <h1 className='text-2xl font-semibold'>Pages</h1>
      

        <div className='flex flex-col items-center justify-center gap-10'>
                    {Pages.map((val, i) => {
                        return (
                            <div key={i}>
                                <Link
                                    to={val.path}
                                    className='text-lg hover:text-orange-500 '
                                >
                                    {val.title}
                                </Link>
                            </div>
                        );
                    })}
                </div>

                


                <h1 className='text-2xl font-semibold'>Layout</h1>
                <div className='flex flex-col items-center justify-center gap-10'>
                    {
                        Layout.map((value,index)=>{
                            return(
                                <div key={index}>
                                    <Link to={value.path} className='text-lg hover:text-orange-500'>
                                    {value.title}
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <h1 className='text-2xl font-semibold'>General Setting</h1>

       </div>
    </div>
  )
}

export default SideBar

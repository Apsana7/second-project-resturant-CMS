import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import { BiSolidUserDetail } from "react-icons/bi";
import { MdMenuBook } from "react-icons/md";
import { MdOutlineFeaturedVideo } from "react-icons/md";
import { IoMdContact } from "react-icons/io";


function SideBar() {
    const Pages = [
        {
            icon:<IoIosHome />,
            title:"Home",
            path:'/'
        },
        {
            icon:<BiSolidUserDetail />,
            title:"About",
            path:'/About'
        },
        {
            icon:<MdMenuBook />,
            title:"Menu",
            path:"/Menu"
        },
        {
            icon:<MdOutlineFeaturedVideo />,
            title:"Stories",
            path:"/Stories"
        },
        {
            icon:<IoMdContact />,
            title:"Contact",
            path:"/Contact"
        },
       
    ]
    const Layout = [
        {
            icon:<MdMenuBook />,
            title:"Menu",
            path:"/Menu"
        }
    ]
  return (
    <div className='w-60 h-lvh  bg-gray-300  border-gray-300 mr-10 flex justify-center py-6'>
       <div className='flex flex-col gap-10 items-center '>
       <h1 className='text-2xl font-semibold'>Pages</h1>
      

        <div className='flex flex-col items-center justify-center gap-10'>
                    {Pages.map((val, i) => {
                        return (
                            <div key={i}>
                               <div className='flex gap-2 items-center justify-center '>
                               <div className='text-xl'>{val.icon}</div>
                                <Link
                                    to={val.path}
                                    className='text-lg hover:text-orange-500 '
                                >
                                    {val.title}
                                </Link>
                               </div>
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
                                   <div className='flex gap-2 items-center justify-center'>
                                   <div className='text-xl'>{value.icon}</div>
                                    <Link to={value.path} className='text-lg hover:text-orange-500'>
                                    {value.title}
                                    </Link>
                                   </div>
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

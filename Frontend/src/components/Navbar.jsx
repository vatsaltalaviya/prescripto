import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-center gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none bg-primary h-0.5 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT AS</li>
                <hr className='border-none outline-none bg-primary h-0.5 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>DOCTORS</li>
                <hr className='border-none outline-none bg-primary h-0.5 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none bg-primary h-0.5 w-3/5 m-auto hidden' />
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token ? 
                <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                    <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 rounded bg-stone-100 flex flex-col gap-4 p-4'>
                            <p onClick={()=>{navigate('myprofile');}} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>{navigate('myappoiment');}} className='hover:text-black cursor-pointer'>my Appoiment</p>
                            <p onClick={()=>{setToken(false);}} className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>
                :<button onClick={()=>{navigate('/login');}} className='px-8 py-3 text-white bg-primary rounded-full font-light hidden md:block'>Create account</button>
            }
            <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
            {/* --------- mobail menu----------------- */}
            <div className={` ${showMenu ? 'w-full fixed ':'h-0 w-0'} bg-white md:hidden right-0 bottom-0 top-0 overflow-hidden z-20 transition-all duration-300`}>
                <div className='px-5 py-6 flex items-center justify-between'>
                    <img className='w-36' src={assets.logo} alt="" />
                    <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT US</p></NavLink>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>DOCTORS</p></NavLink>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
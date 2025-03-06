import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* -------- left ------------- */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 leading-6 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis voluptas sapiente fugit dolorem mollitia quis eligendi blanditiis expedita quasi ratione nulla ducimus, beatae vero maiores consequuntur ad non sint!</p>
            </div>
            {/* -------- middle ------------- */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/* -------- right ------------- */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-512-241-5212</li>
                    <li>prescripto@info.com</li>
                </ul>
            </div>
        </div>
        {/* ---------- copy right section */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025© prescripto All Rights Are Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import { Link } from 'react-router-dom'
import { HiMiniBars3 } from 'react-icons/hi2'
import { IoIosSearch } from 'react-icons/io'
import { FaUser } from 'react-icons/fa6'
import { IoMdHeart } from 'react-icons/io'
import { FaShoppingCart } from 'react-icons/fa'

import avatarImg from '../assets/avatar.png'
import { useState } from 'react'

const navigation = [
    {name: "Dashboard", href:'/dashboard'},
    {name: "Orders", href:'/orders'}, 
    {name: "Cart", href:'/cart'}, 
    {name: "Checkout", href:'/checkout'}, 
]

const Navbar = () => {

    const [isDropdownOpen, SetIsDropdownOpen] = useState(false);
    const currentUser = false;
    return (
        <header className='max-w-screen-2xl mx-auto px-4 py-6'>
            <nav className='flex justify-between items-center'>
                <div className='flex items-center md:gap-16 gap-4'>
                    <Link to='/' className='inline-flex items-center gap-2'><HiMiniBars3 className='size-6' /><span className='sm:block hidden'>MENU</span></Link>

                    <div className='relative sm:w-72 w-40 space-x-2'>
                        <IoIosSearch className='absolute inline-block left-3 inset-y-2' />
                        <input type='text' placeholder='Search for books' className='bg-[#eaeaea] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none'></input>
                    </div>
                </div>

                <div className='relative flex items-center md:space-x-3 space-x-2'>
                    <div>
                        {
                            currentUser ? <>
                                <button onClick={() => SetIsDropdownOpen(!isDropdownOpen)}>
                                    <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />
                                </button>
                                {
                                    isDropdownOpen && (
                                        <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                                            <ul className='py-2'>
                                                {
                                                    navigation.map((item) => (
                                                        <li key={item.name} onClick={() => SetIsDropdownOpen(false)}>
                                                            <Link to={item.href} className='block px-4 py-2 tet-sm hover:bg-gray-100'>
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    )
                                }
                            </> : 
                            <Link to='/login'>
                                <FaUser className='size-6' />
                            </Link>
                        }
                    </div>
                    <button className='hidden sm:block'><IoMdHeart className='size-6' /></button>
                    <Link to='/cart' className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm'>
                        <FaShoppingCart className='size-6' />
                        <span className='text-sm font-semibold sm:ml-1'>0</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
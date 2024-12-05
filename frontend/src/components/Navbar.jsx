import React from 'react'
import { Link } from 'react-router-dom'
import { HiMiniBars3 } from 'react-icons/hi2'
import { IoIosSearch } from 'react-icons/io'
import { FaUser } from 'react-icons/fa6'
import { IoMdHeart } from 'react-icons/io'
import { FaShoppingCart } from 'react-icons/fa'


const Navbar = () => {
    const currentUser = true;
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
                    <FaUser className='size-6' />
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
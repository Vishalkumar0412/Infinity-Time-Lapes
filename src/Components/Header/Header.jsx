import React from 'react'
import Logo from '../Logo'
import Navbar from './Navbar/Navbar'

function Header() {
  return (
    <header className='h-16 bg-white flex justify-between items-center border-b border-gray-600  w-full fixed top-0 left-0 z-10'>
            <Logo/>
            <Navbar/>
    </header>
  )
}

export default Header
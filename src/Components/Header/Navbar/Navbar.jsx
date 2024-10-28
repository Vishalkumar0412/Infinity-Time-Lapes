import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginBtn from './LoginBtn'

function Navbar() {
  return (
  
     <nav className="md:text-lg text-sm text-red-700 h-full font-bold flex justify-center items-center mr-2">
        <a href='#' className="p-2 flex items-center justify-between gap-2">Home</a>
        <a href='#' className="p-2 flex items-center justify-between">Learn</a>
        <a href='#' className="p-2 flex items-center justify-between">Tools</a>
        <a href='#' className="p-2 flex items-center justify-between">About</a>
        <LoginBtn/>
      </nav>
 
  )
}

export default Navbar
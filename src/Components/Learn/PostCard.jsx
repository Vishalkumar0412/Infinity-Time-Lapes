import React from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs";

function PostCard({heading,content}) {
  return (
    <a href='#'>
    <div className="shadow-lg animate-slide-up p-4 m-2 border cursor-pointer bg-gradient-to-r from-red-950 to-red-800 hover:scale-[1.02] group hover:to-black  transition-all duration-75 ease-linear h-60 md:h-96"  >
    <h1 className="md:text-3xl text-xl text-white font-bold transition-all duration-75 ease-linear" >{heading}</h1>
    <p className="md:text-xl text-sm text-white">{content}</p>
    <a href="" className="flex m-4 text-2xl font-bold hover:text-red-200 hover:scale-[1.01] text-white transition-all duration-75 ease-linear"><BsBoxArrowUpRight /></a>
</div>
</a>
  )
}

export default PostCard
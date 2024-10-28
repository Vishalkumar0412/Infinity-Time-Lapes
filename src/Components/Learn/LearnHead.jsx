import React from 'react'
import { CiViewTimeline } from "react-icons/ci";

function LearnHead() {
  return (
    <div id="learn-heading " className="h-16 m-2 w-full flex justify-center items-center p-2 flex-shrink-0">
    <h1 className=" md:text-5xl text-3xl text-white m-2 p-2 font-bold text-center">Learn <CiViewTimeline  className='inline'/> </h1>
    <hr />
    </div>
  )
}

export default LearnHead
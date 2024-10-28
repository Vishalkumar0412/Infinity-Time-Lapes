import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { SiFuturelearn } from "react-icons/si";

function LearnMoreBtn() {
  return (
    <div id="learnMoreBTnDiv" className="w-48 flex text-nowrap rounded-lg">
    <h3 className="md:text-xl text-center  cursor-pointer font-bold text-l text-white rounded bg-red-800 m-2 p-4 group hover:scale-[1.01] hover:bg-red-950"> Learn More <FaArrowRight className='inline group-hover:translate-x-2 transition-all duration-100 ease-linear'/></h3>
    </div>
  )
}

export default LearnMoreBtn
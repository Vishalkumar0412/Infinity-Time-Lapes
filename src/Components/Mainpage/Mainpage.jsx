import Learn from '../Learn/Learn';
import React, { useEffect, useState } from 'react'
import { CgInfinity } from "react-icons/cg";
import { ToolsPage } from '../index';

function Mainpage() {
    const [currentTime, setCurrentTime]=useState('en-US', { hour12: true})
    useEffect(()=>{
        const timer = setInterval(() => {
            
          const date= new Date().toLocaleDateString()
          const time= new Date().toLocaleTimeString('en-US',{hour12:true})
          const dateTime = `${date} ${time}`
          setCurrentTime(dateTime)
          }, 1000);
      
          // Cleanup the interval on component unmount
          return () => clearInterval(timer);
    },[])
  return (
    <>
      <section className='bg-gradient-to-b from-gray-100 to-gray-200 flex justify-center items-center h-screen flex-col'> 
    
    <h1 className="md:text-9xl text-7xl font-primary text-red-600 m-2 p-2 font-bold  text-center "> Infinity <span><CgInfinity className='inline' /> </span>  Time Lapse</h1>
   <h3 className="md:text-5xl text-2xl text-red-700 m-2 p-2 font-bold text-center"> A Complete Time Management </h3>
   <h2 className="md:text-3xl text-2xl text-red-700 m-2 p-2 font-bold text-center"> “I am Time, the great destroyer of the world."</h2>
     <h3 id="TimeH3" className="md:text-5xl text-center cursor-pointer font-bold shadow-xl shadow-red-700  text-4xl text-white bg-red-800 m-2 p-4">{currentTime} </h3>
    
    </section>
    <Learn/>
    <ToolsPage/>

    
    </>
   
  )
}

export default Mainpage
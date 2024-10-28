import React from 'react'
import LearnHead from './LearnHead';
import LearnArticleDiv from './LearnArticleDiv';
import LearnMoreBtn from './LearnMoreBtn';

export default function Learn() {
  return (

  <section id="learn-tab" className=" h-full w-full  bg-gradient-to-r from-black to-gray-950 flex flex-col items-center transition-colors duration-100 ease-linear ">
    <LearnHead/>
    <LearnArticleDiv/>
    <LearnMoreBtn/>
   </section>

  )
}
   

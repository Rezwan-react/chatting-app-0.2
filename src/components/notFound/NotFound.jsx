import React from 'react'
import Lottie from "lottie-react";
import notFound from "../../../public/animation/notFound.json"
function NotFound() {
  return (
    <div className='w-[600px] m-auto'>  
         <Lottie animationData={notFound}/>
         <h1 className='text-3xl flex justify-center items-center mt-10 font-bold font-poppins'>Page not found</h1>
    </div>
  )
}

export default NotFound
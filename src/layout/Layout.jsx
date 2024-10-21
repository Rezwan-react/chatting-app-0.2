import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Layout() {
  // ======================== getting data from reux
  const sliceUser = useSelector((state)=> state.counter.value)
  const navigate  = useNavigate()

  console.log(sliceUser)

  useEffect(()=>{
    if(sliceUser == null){
      navigate('/login')
    }
  }, [])

  return (
   <>
    <div className='flex'>
    <Navbar/>
    <Outlet/>
    </div>
   </>
  )
}

export default Layout
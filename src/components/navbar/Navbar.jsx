import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  const currentUserData= useSelector((state) => state.counter.value)

  return (
    <> 
        <nav className="menu">
          <div className="container ">
            <div className="menu_profile">
              <div className="menu_img">
                <img src={currentUserData?.photoURL} alt="" />
              </div>
              <div className="menu_name">
                <h1>{currentUserData?.displayName}</h1>
              </div>
            </div>
            <div className="maine_menu">
              <ul>
              <NavLink to="/" className={({ isActive}) =>  isActive ? "yesActive" : "noActive" }>
                Home
              </NavLink>
              <NavLink to="/friend" className={({ isActive}) =>  isActive ? "yesActive" : "noActive" }>
                Friend
              </NavLink>
              <NavLink to="/friendAdd" className={({ isActive}) =>  isActive ? "yesActive" : "noActive" }>
                Friend Add
              </NavLink>
              <NavLink to="/chat" className={({ isActive}) =>  isActive ? "yesActive" : "noActive" }>
                Chat
              </NavLink>
              </ul>
              </div>
          </div>
        </nav>      
      
    </>
  )
}

export default Navbar
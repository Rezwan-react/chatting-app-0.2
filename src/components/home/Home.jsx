import React from 'react'
import './Home.css'
import { useSelector } from 'react-redux'

function Home() {
  // ============================ slice data part  
      const currentUserData   = useSelector((state) => state.counter.value)




  return (
    <>      
      <div className='pro_card'>     
        <div className="card_all">
          <div className="card">
                <div className="bg uwu"></div>
                <div className="bg"></div>
                <div className="content">
                      <div className="img">
                            <img src={currentUserData?.photoURL} alt="card_img" />
                      </div>
                      <div className="h1">                          
                          <h1>{currentUserData?.displayName}</h1>
                          <p>{currentUserData?.email}</p>                        
                      </div>                      
                </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
import React from 'react'
import './Home.css'
import { useSelector } from 'react-redux'

function Home() {
  // ============================ slice data part  
      const currentUserData   = useSelector((state) => state.counter.value)

    console.log(currentUserData)



  return (
    <>      
      <div className='pro_card'>
        <div className="card">
          <div className="card2">
            <div className="card_text">
              <div className="card_img">
                <img src={currentUserData?.photoURL} alt="card_img" />
              </div>
              <div className="text">
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
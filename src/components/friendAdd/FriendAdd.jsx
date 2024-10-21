import React, { useEffect, useState } from 'react'
import './FriendAdd.css'
import { getDatabase, ref, onValue } from "firebase/database";

function FriendAdd() {
  // =================================== variabie part start
  const [allUsers, setAllUsers]           = useState([])

  // ====================== firebase variabie part start
  const db = getDatabase();

  // ====================== realtime database
  useEffect( ()=>{
    const starCountRef = ref(db, 'AllUsers/');
    onValue(starCountRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item)=>{
        arr.push(item.val())
      })
      setAllUsers(arr)
    });
  }, [])
  console.log(allUsers)
  return (
    <>
        <div className="card">
          <div className="contianer">
            <p className="title">Friend Add</p> 
              {
                allUsers.map((item)=>(
                  <div className="user_data">
                    <div className="user">
                      <div className="image">
                        <img src={item.userPhoto} alt="user Photo" />
                      </div>
                      <div className="text">
                        <h2>{item.userName}</h2>
                        <p>{item.userEmail}</p>
                      </div>
                    </div>
                    <button className="follow">Add</button>
                  </div>  
                
                )) 
              }      
          </div>
        </div>
    </>
  )
}

export default FriendAdd
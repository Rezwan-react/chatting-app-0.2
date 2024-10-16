import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
function RestPassword() {
    const [email, setEmail]     = useState('');
    const auth                  = getAuth();
    const navigate              = useNavigate()
    const handleChange = (e)=>{
        setEmail(e.target.value);
        
      };

      const handleSubmit =(e)=>{
        e.preventDefault()
        if(!email){
            alert('enter your email')
        }else{
            sendPasswordResetEmail(auth, email)
                .then(() => {
                navigate('/login')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
            });
        }
      }
  
  return (
    <>
       <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-[#006BFF] p-8 rounded-3xl shadow-2xl max-w-md w-full">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Rest Password</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="input" className="block text-sm font-medium text-gray-700 mb-1">
            Enter your email
            </label>
            <input
              type="email"
              id="input"
              value={email}
              onChange={handleChange}
              className="block bg-[#08C2FF] w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Type here"
              
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold  py-3 rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 active:scale-95"
          >
            Rest Password
          </button>
          <div >

          <Link to="/login" className=" text-xl font-semibold text-white mt-5  text-center  " >Go to login</Link>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default RestPassword
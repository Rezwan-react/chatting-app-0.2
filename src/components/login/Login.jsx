import React, { useState } from 'react';
import Lottie from "lottie-react";
import loginani from "../../../public/animation/login.json"
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { userData } from '../../slices/UserSlice';

const Login = () => {
  // =================================== variabie part start
  const [email, setEmail]                  = useState('')
  const [emailError, setEmailError]        = useState('')
  const [password, setPasswors]            = useState('')
  const [passError, setPassError]          = useState('')
  const [showPassword, setShowPassword]    = useState(false)
  const navigate                           = useNavigate()
  const dispatch                           = useDispatch()
  // ====================== firebase variabie part stsrt
  const auth = getAuth();


  // =================================== functions part start
  const handelEmail =(e)=>{
    setEmail(e.target.value)
    setEmailError('')
  }
  const handelPass =(e)=>{
    setPasswors(e.target.value)
    setPassError('')
  }

  const togglePasswordVisibility = () => {
     setShowPassword(!showPassword);
  };

  // =================================== main submit functions
  const handelSubmit =(e)=>{
    e.preventDefault()
    if(!email){
      setEmailError("Enter your email")
    } if(!password){
      setPassError("Enter your password")
    }else{
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        if(userCredential.user.email.emailVerifiev == false){
          toast.error('plase verifiev your email', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
        }else{
             toast.success('Login Successfull', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
             });
             navigate('/')
             dispatch(userData(user))
            }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
      });
     
    }
  }



  return (
    <div className="min-h-screen flex items-center justify-center gap-[50px] bg-gradient-to-r from-teal-400 to-cyan-500">
      <div className="animation ">
          <Lottie animationData={loginani}/>
      </div>
      <div className="bg-white p-12 rounded-3xl shadow-2xl w-full max-w-md relative">
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
        
        </div>
        <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-8 text-center">Login </h2>
        <form  >
          {/* ================================ email ===================================== */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
            <input onChange={handelEmail}
              type="email"
              id="email"
              className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
              placeholder="Enter your email"
              required
            />
            <p className='text-sm font-poppins font-normal text-red-600 m-2 '>{emailError}</p>
          </div>
          {/* ============================================== password ====================================== */}
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
          <div className="relative mb-6 ">
            {
              showPassword?
              <FaRegEye onClick={togglePasswordVisibility} className=' absolute top-2 right-4 translate-y-[50%]' />
              :
              <FaRegEyeSlash onClick={togglePasswordVisibility} className=' absolute top-2 right-4 translate-y-[50%]' />
            }
            <input onChange={handelPass}
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 pr-10"
              placeholder="Enter your password"
              required
            />
            <p className='text-sm font-poppins font-normal text-red-600 m-2 '>{passError}</p>
          </div>
          {/* ============================================ button ======================================== */}
          <button onClick={handelSubmit}
            type="submit"
            className="w-full px-5 py-3 bg-cyan-500 text-white font-semibold rounded-full shadow-lg hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition duration-300 active:scale-95"
          >
            Log In
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account? <Link to="/register" className="text-cyan-500 hover:underline font-semibold">Sign Up</Link>
        </p>
        <div className='flex justify-center mt-2 text-sm font-semibold font-poppins '>
          <Link to='/restPasswoed'>Forgot password ?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

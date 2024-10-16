import Lottie from "lottie-react";
import registerani from "../../../public/animation/register.json"
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { ScaleLoader } from "react-spinners";


function Register() {
 // =================================== react variabie part start
  const [userName, setUserName]                                        = useState('')
  const [userNameError, setUserNameError]                              = useState('')
  const [email, setEmail]                                              = useState('')
  const [emailError, setEmailError]                                    = useState('')
  const [password, setpassword]                                        = useState('')
  const [passError, setPassError]                                      = useState('')
  const [confirmPassword, setconfirmPassword]                          = useState('')
  const [confirmPasswordError, setconfirmPasswordError]                = useState('')
  const [showPassword, setShowPassword]                                = useState(false)
  const [showConPassword, setShowConPassword]                          = useState(false)
  const navigate                                                       = useNavigate()
  // ====================== firebase variabie part stsrt
  const auth = getAuth();
  const [spinners, setSpinners] = useState(false)

  // =================================== functions part start
  const handelUser =(e)=>{
    setUserName(e.target.value)
    setUserNameError('')
  }
  const handelEmail =(e)=>{
    setEmail(e.target.value)
    setEmailError('')
  }
  const handelPass =(e)=>{
    setpassword(e.target.value)
    setPassError('')
  }
  const handelConPass =(e)=>{
    setconfirmPassword(e.target.value)
    setconfirmPasswordError('')
  }

  const togglePasswordVisibility = () => {
     setShowPassword(!showPassword);
  };
  const handelCon = () => {
    setShowConPassword(!showConPassword);
  };

  // =================================== main submit functions
  const handelSubmit =(e)=>{
    e.preventDefault()
    if(!userName){
      setUserNameError("Enter your user name")
    }
    if(!email){
      setEmailError("Enter your email")
    } if(!password){
      setPassError("Enter your password")
    }else if(!confirmPassword){
      setconfirmPasswordError("Enter your confirm password")
    }
    else{
      if(password !=confirmPassword){
        toast.error('plase same password', {
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
        setSpinners(true)
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // ====================== update profile and profile pic
          updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: "https://avatars.githubusercontent.com/u/8406373?v=4"
          })
          // ================ loader part
          setSpinners(false)
          // ================ toast massege
          toast.success('Register Successfull', {
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
            navigate('/login')
            // ================= email verification part 
            sendEmailVerification(auth.currentUser)
            .then(() => {
              toast.success('email verification', {
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
            });
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSpinners(false)
          if(errorCode == 'auth/weak-password'){
            toast.error('plase select an strong password', {
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
          }
          if(errorCode == 'auth/email-already-in-use'){
            toast.error('email already useed', {
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
          }
      });
      }
    }
  }

  return (
    <>
         <div className="min-h-screen flex items-center justify-center gap-[50px] bg-gradient-to-r from-teal-400 to-cyan-500">
      <div className="animation w-[600px] ">
          <Lottie animationData={registerani}/>
      </div>
      <div className="bg-[#b491ffb4] p-10 rounded-3xl shadow-2xl w-full max-w-md relative">
        {/* <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
        
        </div> */}
        <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-8 text-center">Register</h2>
        <form  >
          {/* =================== user name =============== */}
        <div className="mb-6">
            <label htmlFor="email" className="block text-black  font-poppins text-sm font-semibold mb-2">User Name</label>
            <input onChange={handelUser}
              type="text"
              
              className="w-full px-5 py-3 text-white placeholder:text-white border bg-transparent border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 pr-10"
              placeholder="Enter your name"
              
            />
            <p className='text-sm font-poppins font-normal text-red-600 m-2 '>{userNameError}</p>
          </div>
          {/* =========================== email ========================== */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-black font-poppins text-sm font-semibold mb-2">Email Address</label>
            <input onChange={handelEmail}
              type="email"
              
              className="w-full px-5 py-3 border text-white  placeholder:text-white bg-transparent border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 pr-10"
              placeholder="Enter your email"
              required
            />
            <p className='text-sm font-poppins font-normal text-red-600 m-2 '>{emailError}</p>
          </div>
          {/* ========================= password =================== */}
            <label htmlFor="password" className="block text-black font-poppins text-sm font-semibold mb-2">Password</label>
          <div className="relative mb-6 ">
            {
              showPassword?
              <FaRegEye onClick={togglePasswordVisibility} className=' absolute top-2 right-4 translate-y-[50%]' />
              :
              <FaRegEyeSlash onClick={togglePasswordVisibility} className=' absolute top-2 right-4 translate-y-[50%]' />
            }
            <input onChange={handelPass}
              type={showPassword ? 'text' : 'password'}
              
              className="w-full px-5 py-3 bg-transparent placeholder:text-white text-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 pr-10"
              placeholder="Enter your password"
              required
            />
            <p className='text-sm font-poppins font-normal text-red-600 m-2 '>{passError}</p>
          </div>
          {/* =========================== confirm password ================= */}
            <label htmlFor="password" className="block text-black font-poppins text-sm font-semibold mb-2">Confirm Password</label>
          <div className="relative mb-6 ">
            {
              showConPassword?
              <FaRegEye onClick={handelCon} className=' absolute top-2 right-4 translate-y-[50%]' />
              :
              <FaRegEyeSlash onClick={handelCon} className=' absolute top-2 right-4 translate-y-[50%]' />
            }
            <input onChange={handelConPass}
              type={showConPassword ? 'text' : 'password'}
              id="password"
              className="w-full px-5 py-3 bg-transparent placeholder:text-white text-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 pr-10"
              placeholder="Enter your password"
              required
            />
            <p className='text-sm font-poppins font-normal text-red-600 m-2 '>{confirmPasswordError}</p>
          </div>
          {/* ==================== submit button ============================= */}
            {
              spinners?              
              <div className=" flex justify-center w-full px-5 py-1 bg-cyan-500 text-white font-poppins font-semibold rounded-full shadow-lg hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition duration-300 active:scale-95" >
              <ScaleLoader color="white" size="10px" />
              </div>
              :

          <button onClick={handelSubmit}
            type="submit"
            className="w-full px-5 py-3 bg-cyan-500 text-white font-poppins font-semibold rounded-full shadow-lg hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition duration-300 active:scale-95"
          >
            Register
          </button>
            }
        <p className="mt-6 text-center text-white font-poppins">
        already have an account? <Link to="/login" className=" hover:underline font-poppins font-bold">Login</Link>
        </p>
        </form>
      </div>
    </div>
    </>
  )
}

export default Register
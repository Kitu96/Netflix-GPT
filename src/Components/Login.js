import React, { useState } from 'react'
import Header from './Header'

function Login() {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignIn =()=>{
       setIsSignInForm(!isSignInForm);
    }
  return (
    <div className='absolute h-screen w-screen text-white'>
        <Header/>
      <div>
        <img  className= "h-screen w-screen absolute -z-10"src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg" alt = "logo"/>
      </div>
      <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h2 className='font-bold text-4xl py-4'>{isSignInForm ? "Sign In" : "Sing Up"}</h2>

        {!isSignInForm && <input type="text"
         placeholder='Full Name' 
         className='w-full py-4 my-4 bg-gray-500'/>
        }

        <input type="text"
         placeholder='Enter EmailId or mobile Number' 
         className='w-full py-4 my-4 bg-gray-500 text-wrap'/>

        <input type="password" 
        placeholder='password' 
        className='w-full py-4 my-4 bg-gray-500 text-inherit'/>

        <button
         className='bg-red-700 cursor-pointer my-2 py-4 w-full rounded'>
         {isSignInForm ? "Sign In" : "Sing Up"}
        </button>
        <p className='py-4' onClick={toggleSignIn}>{isSignInForm ? "New to Netflix?Sign up Now" : "Already registered?Please SignIp Now."}</p>
      </form>
    </div>
  )
}

export default Login;

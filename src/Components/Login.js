import React, { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

function Login() {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const handleClick =()=>{
    setIsSignInForm(prev => !prev);
  }
  return (
    <div className='absolute h-screen w-screen text-white'>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7c9e63f7-5b5d-43a4-a3fb-41917ac25301/web/IN-en-20251013-TRIFECTA-perspective_7bc35267-b383-4fb3-b173-eae32292d42e_large.jpg" alt="logo"/>
      </div>
      <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='text-white px-1 text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder='Name' className='w-full py-2 my-2 bg-gray-500 rounded'/>}
        <input type="text" placeholder="Email or phone number" className='w-full py-2 my-2 bg-gray-500 rounded'/>
        <input type="password" placeholder="password" className=' w-full py-2 my-4 text- bg-gray-500 rounded'/>
        <button className="bg-red-700 w-full py-2 cursor-pointer rounded ">
          {isSignInForm?"sign In" : "SignUp"}
          </button>
          <div className='text-center py-2'>OR</div>
          <button className='py-2 w-full bg-gray-500 rounded'>Use a sign-in code</button>
          <div>
          <Link to="/" className='items-center'>Forgot Password?</Link>
          </div>
          <p>Remember Me</p>
          <p onClick={handleClick}>{isSignInForm ? "New to Netflix?Sign up Now" : <>Already registered?<strong> Signup Now.</strong></>}</p>

      </form>
    </div>
  )
}

export default Login

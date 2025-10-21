import React, { useRef, useState } from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import { CheckValidate } from '../utils/Validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUSer } from '../utils/userSlice';

function Login() {
const [isSignInForm,setIsSignInForm] = useState(true);
const[errorMessage,setErrorMessage] = useState("");
const email = useRef(null);
const name = useRef(null)
const password= useRef(null);
const dispatch = useDispatch();

const handleButtonClick = () => {
  const message = CheckValidate(email.current.value, password.current.value);
  setErrorMessage(message);
  console.log("Credential:", email.current.value);
  console.log("Credential:", password.current.value);

  if (message) return;
if (isSignInForm) {
  // For sign in, use signInWithEmailAndPassword
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      console.log("Signed in:", userCredential.user);

    })
    .catch((error) => {
      console.error("Sign in error code:", error.code);
      console.error("Sign in error message:", error.message);
      setErrorMessage(error.message);    

    });
} else {
  // For sign up, use createUserWithEmailAndPassword
  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      const user =  userCredential.user;
      updateProfile(user, {
  displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
   const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUSer(uid,email,displayName,photoURL));
}).catch((error) => {
  setErrorMessage(error.message);
});
      
    })
    .catch((error) => {
      console.error("Sign up error code:", error.code);
      console.error("Sign up error message:", error.message);
      setErrorMessage(error.message);
    });
  }
}
  const handleClick =()=>{
    setIsSignInForm(prev => !prev);
  }
  return (
    <div className='absolute h-screen w-screen text-white'>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7c9e63f7-5b5d-43a4-a3fb-41917ac25301/web/IN-en-20251013-TRIFECTA-perspective_7bc35267-b383-4fb3-b173-eae32292d42e_large.jpg" alt="logo"/>
      </div>
      <form
       className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'
        onSubmit={(e)=>e.preventDefault()}
        >
        <h1
         className='text-white px-1 text-3xl'>
          {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
        { !isSignInForm && 
        <input  
        type="text" 
        placeholder='Name' 
        className='w-full py-2 my-2 bg-gray-500 rounded'
        ref={name}
        />
        }

        <input
         type="text"
          placeholder="Email or phone number" 
          className='w-full py-2 my-2 bg-gray-500 rounded' 
          ref={email}
          autoComplete="username"/>

        <input
        ref={password} 
        type="password" 
        placeholder="password"
         className=' w-full py-2 my-4 text- bg-gray-500 rounded'
         autoComplete="current-password"
         />

        <button className="bg-red-700 w-full py-2 cursor-pointer rounded " onClick={handleButtonClick}>
          {isSignInForm?"sign In" : "SignUp"}
          </button>
          {errorMessage && <p className='text-red-800 text-bold'>{errorMessage}</p>}

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

export default Login;

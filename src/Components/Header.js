import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUSer, removeUser } from '../utils/userSlice';
import { IMAGE, LOGO } from '../utils/constants';

function Header() {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const dispatch = useDispatch();

  const handleSignOutClick = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid,email,displayName,photoURL} = user;
    dispatch(addUSer(uid,email,displayName,photoURL));
    navigate("/browse");
  } else {
  dispatch(removeUser());
  navigate("/");
  }
});
//Unsubscribe  when component umnounts
 return () => unsubscribe();
},[])

  return (
    <>
      {/* Header with logo and right side controls */}
      <div className="absolute w-screen px-4 py-4 bg-gradient-to-b from-black z-10 flex justify-between items-center">
        {/* Left: Netflix Logo */}
        <img
          className="w-44"
          src={LOGO}
          alt="Netflix Logo"
        />

        {/* Right: Avatar + Sign Out */}
        { user && <div className="flex items-center space-x-4">
          <img
            src={IMAGE}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <button
            className="font-bold text-red-500 hover:underline"
            onClick={handleSignOutClick}
          >
            Sign Out
          </button>
        </div>}
      </div>

      {/* Navigation links */}
      {/* <ul className="flex justify-center mt-24 space-x-12 text-lg font-medium">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Shows</li>
        <li className="hover:underline cursor-pointer">Movies</li>
        <li className="hover:underline cursor-pointer">Games</li>
        <li className="hover:underline cursor-pointer">New & Popular</li>
        <li className="hover:underline cursor-pointer">MyList</li>
        <li className="hover:underline cursor-pointer">Browse By Language</li>
      </ul> */}
    </>
  );
}

export default Header;

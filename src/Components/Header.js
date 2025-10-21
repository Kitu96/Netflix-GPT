import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUSer, removeUser } from '../utils/userSlice';

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
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />

        {/* Right: Avatar + Sign Out */}
        { user && <div className="flex items-center space-x-4">
          <img
            src="https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
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

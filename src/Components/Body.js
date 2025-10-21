import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Login'
import Browse from"./Browse";
import { useEffect } from "react";
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useDispatch } from "react-redux";
import { addUSer, removeUser } from "../utils/userSlice";

export default function Body(){
  const dispatch = useDispatch();

useEffect(()=>{
onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid,email,displayName,photoURL} = user;
    dispatch(addUSer(uid,email,displayName,photoURL));
  } else {
  dispatch(removeUser());
  }
});
},[])


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    }
  ])
  return(
   <RouterProvider router={appRouter}/>
  )

}
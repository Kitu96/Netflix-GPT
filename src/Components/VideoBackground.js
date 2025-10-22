import React from 'react'
import useMoviesTrailer from '../Hooks/useMovieTrailer';
// import { useSelector } from "react-redux";

export default function VideoBackground({movieId}) {
 useMoviesTrailer(movieId);
  //  const trailer =useSelector(store=>store.movies?.trailer);
  return (
    <div className = "w-screen h-screen">
     <iframe className="w-screen aspect-video"     
      src="https://www.youtube.com/embed/VTRkFdjqdUs?si=G0FF3P8u0e7Y9Il7?&autoplay=1&mute=1" 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write;
       encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin">
     </iframe>
    </div>
  )
}

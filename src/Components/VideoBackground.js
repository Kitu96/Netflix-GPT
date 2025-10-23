import React from 'react';
import useMoviesTrailer from '../Hooks/useMovieTrailer';

export default function VideoBackground({ movieId }) {
  useMoviesTrailer(movieId);

  return (
    <div className="w-screen h-screen">
   <iframe
  className="w-screen aspect-video"
  src="https://www.youtube.com/embed/VTRkFdjqdUs?autoplay=1&mute=1&enablejsapi=1"
  title="YouTube video player"
  allow="autoplay; fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  referrerPolicy="no-referrer"
/>
    </div>
  );
}

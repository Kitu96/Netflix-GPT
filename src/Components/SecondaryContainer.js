import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
  const movies = useSelector(store=>store.movies)
  if(!movies?.nowPlayingMovies?.length) return null;
  return (
    movies?.nowPlayingMovies && (
       <div className='bg-black'>
      <div className='-mt-12 pl-12 relative'>
      <MovieList title={"Now Playing"} movies= {movies?.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies= {movies?.popularMovies?.results}/>
      <MovieList title={"Horror"} movies= {movies?.nowPlayingMovies}/>
      <MovieList title={"Documentary"} movies= {movies?.nowPlayingMovies}/>
    </div>
</div>
    )
  )
}

export default SecondaryContainer

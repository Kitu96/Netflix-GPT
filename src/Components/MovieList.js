import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

export default function MovieList({title,movies}) {
    // const movies = useSelector(store=>store.movies)
  return (
    <div className='bg-black'>
    <div className='px-1 py-1'>
        <h1 className='text-3xl text-white'>{title}</h1>
        <div className='flex overflow-x-scroll '>           
        <div className='flex space-x-4'> 
         {movies?.map((movie)=><MovieCard key ={movie.id} poster_path={movie.poster_path}/>) }       
        </div>      
         </div>
    </div>
    </div>
  )
}

import React from 'react'

export default function VideoTitle({title,overview}) {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='py-6 w-1/4'>{overview}</p>
        <div className='space-x-2.5'>
            <button className='bg-white text-black rounded w-20 h-10 hover:bg-opacity-80'> ▶ Play</button>
            <button className='bg-slate-400 rounded w-20 h-10 hover:bg-opacity-80'> MoreInfo</button>
        </div>
      
    </div>
  )
}

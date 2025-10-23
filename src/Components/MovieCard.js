import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

export default function MovieCard({poster_path}) {
  return (
    <div className='w-48'>
        <img alt="Movie poster" src={IMG_CDN_URL + poster_path}/>     
    </div>
  )
}

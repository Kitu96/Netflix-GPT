import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

function Browse() {
  useNowPlayingMovies();
  return (
    <div>
      <h1>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
      </h1>
    </div>
  )
}

export default Browse

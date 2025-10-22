import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null ,
        movieTrailerVieo : null
    },
    reducers:{
        addMovies:(state,action) =>{
         state.nowPlayingMovies= action.payload;
        },
        addmovieTrailerVieo:(state,action) =>{
            state.movieTrailerVieo = action.payload;
        }
    }
    
})
export const {addMovies,addmovieTrailerVieo} = movieSlice.actions;

export default movieSlice.reducer;
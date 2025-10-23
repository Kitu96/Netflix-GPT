import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        movieTrailerVieo: null,
        popularMovies: null
    },
    reducers: {
        addMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => { 
            state.popularMovies = action.payload;
        },
        addmovieTrailerVieo: (state, action) => {
            state.movieTrailerVieo = action.payload;
        }
    }
});

export const { addMovies, addmovieTrailerVieo, addPopularMovies } = movieSlice.actions; // ✅ plural export
export default movieSlice.reducer;

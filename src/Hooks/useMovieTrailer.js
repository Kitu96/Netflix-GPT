import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants"
import { addmovieTrailerVieo } from "../utils/movieSlice";
import { useEffect } from "react";


const useMoviesTrailer = (movieId) =>{
    const dispatch = useDispatch();
   
    const getTrailerVideo = async () =>{
       const data = await fetch("https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US" , API_OPTIONS);
        const json = await data.json();  

     const filterVideo = json.results.filter(video =>video.type === "Trailer");
     const trailer = filterVideo.length ? filterVideo[0] : json.results[0] ;
     dispatch(addmovieTrailerVieo(trailer));

    }

    useEffect(()=>{
     getTrailerVideo();
    },[])
}

export default useMoviesTrailer;
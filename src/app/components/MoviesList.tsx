import React from 'react';
import {getMovies} from "@/app/services/api.servises";
import {MovieType} from "@/app/models/BaseResponseType";
import MoviesListCard from "@/app/components/MoviesListCard";
import {page} from "@/app/components/pagination";

const MoviesList =async () => {
    const movies:MovieType[] = await getMovies(page)
    return (
        <div>
            {movies.map((movie:MovieType)=>(<div key={movie.id}> <MoviesListCard movie={movie}/></div> ))}
        </div>
    );
};

export default MoviesList;
import {BaseResponseType, GenreResponse, GenreType, MovieType} from "@/app/models/BaseResponseType";
import {page} from "@/app/components/pagination";

const genreUrl = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
const movieUrl =`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=`
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzQ5MTJjMWViNjBkNzlmODI5MmQ2MWViMjZiMTA3MCIsIm5iZiI6MTczMTYxODcxNS4zNTA5MjgsInN1YiI6IjY3MzY1ODI0NzFlZjY2OTc4Y2ZhZWY1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mchn5oG8BEEPgo82CL1G2NF66rJrQCV5j1v96AFjsqA'
    }
};

export const getGenre =async ():Promise<GenreType[]>=> {
    const response:GenreResponse = await fetch(genreUrl, options)
        .then(res => res.json());
    return response.genres
}

export const getMovies = async (page:number):Promise<MovieType[]>=> {
    const response: BaseResponseType = await fetch(`${movieUrl}${page}`, options)
        .then(res => res.json());
    return response.results
}
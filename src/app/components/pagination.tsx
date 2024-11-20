'use client'
import React from 'react';
import {getMovies} from "@/app/services/api.servises";

export let page:number = 1;
const prevPage =()=>{--page; getMovies(page)};
const nextPage =()=>{++page; getMovies(page)};
const Pagination = () => {

    return (
        <div>
            <button onClick={prevPage} disabled={page===1}>Previous</button>
             {page}
            <button onClick={nextPage}>Next</button>
        </div>
    );
};

export default Pagination;


import React, {FC} from 'react';
import {MovieProps} from "@/app/models/BaseResponseType";

const MoviesListCard:FC<MovieProps> = ({movie}) => {
    return (
        <div>
            {movie.title}
        </div>
    );
};

export default MoviesListCard;
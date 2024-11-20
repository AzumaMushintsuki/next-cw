export type BaseResponseType = {
	page: number;
	results: MovieType[];
	total_pages: number;
	total_results: number;
}
export type MovieType = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export type GenreResponse ={
	genres: GenreType[]
}
export type GenreType ={
	id: number,
	name: string
}

export type MovieProps = {movie : MovieType}
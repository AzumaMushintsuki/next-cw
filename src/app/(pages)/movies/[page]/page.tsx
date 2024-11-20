import MoviesList from "@/app/components/MoviesList";
import Pagination from "@/app/components/pagination";


export default function Home() {
    return (
        <div>
            <MoviesList/>
            <Pagination/>
        </div>
    );
}
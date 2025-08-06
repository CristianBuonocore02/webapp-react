import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(import.meta.env.VITE_SERVERAPI_URL + 'api/movies')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, []);

    return (
        <div className="row">
            {movies.map(movie => (
                <div className="col-md-4 mb-4" key={movie.id}>
                    <MovieCard movie={movie} />
                </div>
            ))}
        </div>

    );
}

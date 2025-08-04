import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
    if (!movies || movies.length === 0) {
        return <p>No movies available.</p>;
    }

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

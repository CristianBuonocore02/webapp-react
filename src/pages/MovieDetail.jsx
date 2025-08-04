import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVERAPI_URL}api/movies/${id}`)
            .then((res) => res.json())
            .then((data) => setMovie(data))
    }, [id]);


    return (
        <div className="container py-4 text-center">
            <h2>{movie?.title}</h2>

            <img
                src={import.meta.env.VITE_SERVERAPI_URL + movie?.image}
                alt={movie?.title}
                className="img-fluid mb-3"
            />

            <p>Movie ID: {id}</p>
        </div>
    );
}

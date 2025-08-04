import { Link } from 'react-router-dom';



export default function MovieCard({ movie }) {


    return (
        <div className="card h-100 shadow-sm">
            <img
                src={import.meta.env.VITE_SERVERAPI_URL + movie.image}
                className="card-img-top"
                alt={movie.title}
            />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{movie.title}</h5>
                <Link to={`/movie/${movie.id}`} className="btn btn-primary mt-3">
                    View Details
                </Link>
            </div>
        </div>
    );
}

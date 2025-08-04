import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark px-4">
                <Link className="navbar-brand text-white logo" to="/"> MyMovies</Link>
            </nav>

            <main className="container mt-4">
                <Outlet />
            </main>

            <footer className="bg-dark text-white text-center py-3 mt-5">
                <p>© 2025 MyMovies App</p>
            </footer>
        </>
    );
}

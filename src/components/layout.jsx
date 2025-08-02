import { Outlet } from "react-router-dom";

export default function layout() {
    return (
        <>
            <nav></nav>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}
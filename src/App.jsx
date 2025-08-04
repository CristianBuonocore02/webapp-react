import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout"
import HomePage from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="movie/:id" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

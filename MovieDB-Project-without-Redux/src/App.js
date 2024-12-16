import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";


const App = () => {

  const [moviesData, setMoviesData] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <BrowserRouter>
        <NavBar setMoviesData={setMoviesData} setSearchQuery={setSearchQuery} />
        <Container>
          <Routes>
            <Route path="/" element={<MovieList moviesData={moviesData} setMoviesData={setMoviesData} searchQuery={searchQuery} />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;

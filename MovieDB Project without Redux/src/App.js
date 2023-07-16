import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";


const App = () => {

  const [moviesDataState, setMoviesDataState] = useState({});
  const [searchQueryState, setSearchQueryState] = useState("");

  return (
    <>
      <BrowserRouter>
        <NavBar setMoviesData={setMoviesDataState} setSearchQuery={setSearchQueryState} />
        <Container>
          <Routes>
            <Route path="/" element={<MovieList moviesData={moviesDataState} setMoviesData={setMoviesDataState} searchQuery={searchQueryState} />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;

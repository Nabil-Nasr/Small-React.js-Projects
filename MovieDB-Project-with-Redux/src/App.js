import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;

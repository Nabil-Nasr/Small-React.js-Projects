import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import getMovies from "../utils/getMovies";
import { useEffect } from "react";
import Pagination from "./Pagination";

const MovieList = ({ moviesData = {}, setMoviesData, searchQuery }) => {
  const { page, results: movies, total_pages: totalPages } = moviesData;

  useEffect(() => {
    getMovies({ setMoviesData });
  }, []);

  return (
    <>
      <Row className="my-4">
        {
          movies ? (movies.length ?
            movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
            : <h1 className="text-center">لا يوجد نتائج ......</h1> ): <h1 className="text-center">جاري التحميل ......</h1>
        }
      </Row>

      <Pagination pageCount={movies && movies.length ? totalPages : 0} searchQuery={searchQuery} setMoviesData={setMoviesData} currentPage={page} />
    </>
  );
};

export default MovieList;

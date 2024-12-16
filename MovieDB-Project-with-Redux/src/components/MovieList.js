import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";

const MovieList = () => {
  const { page, results: movies, total_pages: pageCount } = useSelector(({ moviesData }) => moviesData);
  return (
    <>
      <Row className="my-4">
        {
          movies ? (movies.length ?
            movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
            : <h1 className="text-center">لا يوجد نتائج ......</h1>) : <h1 className="text-center">جاري التحميل ......</h1>
        }
      </Row>

      <Pagination pageCount={pageCount} currentPage={page} />
    </>
  );
};

export default MovieList;

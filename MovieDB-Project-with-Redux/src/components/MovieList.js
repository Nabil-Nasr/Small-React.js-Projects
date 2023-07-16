import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const MovieList = () => {

  const { page,results: movies ,total_pages:pageCount} = useSelector(({moviesData})=>moviesData)

  const searchQuery = useSelector(({searchQuery})=>searchQuery)

  const [,setSearchParams] = useSearchParams({})

  const handlePageChange = ({ selected }) => {
    // The selected is starting from 0
    const page = selected + 1;
    setSearchParams({page,query:searchQuery})
  };

  return (
    <>
      <Row className="my-4">
        {
          movies ? (movies.length ?
            movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
            : <h1 className="text-center">لا يوجد نتائج ......</h1> ): <h1 className="text-center">جاري التحميل ......</h1>
        }
      </Row>

      <Pagination handlePageChange={handlePageChange} pageCount={pageCount} currentPage={page}/>
    </>
  );
};

export default MovieList;

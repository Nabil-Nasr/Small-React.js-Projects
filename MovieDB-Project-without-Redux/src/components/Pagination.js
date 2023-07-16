import ReactPaginate from "react-paginate";
import getMovies from "../utils/getMovies";

const Pagination = ({ pageCount, setMoviesData, searchQuery, currentPage }) => {

  const handlePageChange = ({ selected }) => {
    // The selected is starting from 0
    const page = selected + 1;
    getMovies({ page, setMoviesData, query: searchQuery });
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageChange}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="السابق"
      renderOnZeroPageCount={null}
      containerClassName="pagination justify-content-center flex-wrap row-gap-1"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      activeClassName="active"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      disabledClassName="disabled"
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;


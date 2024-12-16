import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ pageCount, currentPage }) => {
  const [, setSearchParams] = useSearchParams({});
  const handlePageChange = ({ selected }) => {
    // The selected is starting from 0
    const page = selected + 1;
    setSearchParams(prevSearchParams => {
      prevSearchParams.set("page", page);
      return prevSearchParams;
    });

  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageChange}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      pageCount={!pageCount || pageCount <= 1 ? 0 : pageCount}
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
      forcePage={
        // conditions to handle warnings of pageCount and forcePage
        !currentPage
          || currentPage > pageCount
          || (currentPage === 1 && pageCount <= 1)
          ? -1
          : currentPage - 1}
    />
  );
};

export default Pagination;


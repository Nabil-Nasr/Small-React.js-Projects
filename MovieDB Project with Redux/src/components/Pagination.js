import ReactPaginate from "react-paginate";

const Pagination = ({handlePageChange,pageCount,currentPage}) => {
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
      forcePage={isNaN(currentPage-1)?-1:currentPage-1}
    />
  );
};

export default Pagination;


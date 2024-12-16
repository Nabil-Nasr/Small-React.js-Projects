import { Container, Navbar, Form } from "react-bootstrap";
import getMovies from "../utils/getMovies";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import useSearchNavigate from "../hooks/useSearchNavigate";
import useDebouncedSearchParams from "../hooks/useDebouncedSearchParams";

const NavBar = () => {

  const searchNavigate = useSearchNavigate({ delay: 250 });
  const [searchParams, setSearchParams] = useDebouncedSearchParams({}, 1000);

  const searchQuery = searchParams.get("query");

  const dispatch = useDispatch();


  const changeParams = ({ target }) => {
    const query = target.value;
    if (window.location.pathname === "/") {
      setSearchParams(prevSearchParams => {
        prevSearchParams.delete("page");
        if (query === "")
          prevSearchParams.delete("query");
        else
          prevSearchParams.set("query", query);
        return prevSearchParams;
      });
    } else {
      searchNavigate({ pathname: "/", searchParams: { query } });
    }
  };

  // search by params
  const searchForMovies = ({ signal }) => {
    const pageQuery = searchParams.get("page");
    // The condition for not searching for movies when the route is 404 or any other page like movie details page
    if (window.location.pathname === "/") {
      getMovies({ query: searchQuery, dispatch, page: pageQuery || 1, signal });
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    searchForMovies({ signal: controller.signal });
    return () => {
      controller.abort();
    };
  }, [searchParams]);
  return (
    <Navbar className="bg-custom-brown py-3 position-sticky top-0 z-1 shadow-sm ">
      <Container >
        <Link to="/?page=1"><img src={logo} alt="MovieDB logo" className="nav-logo" /></Link>

        <Form.Control
          type="search"
          placeholder="ابحث ..."
          className="ms-4"
          aria-label="ابحث"
          onChange={changeParams}
          onKeyDown={event => event.key === "Enter" && changeParams(event)}
          defaultValue={window.location.pathname === "/" ? searchQuery : null}
        />

      </Container>
    </Navbar>
  );
};

export default NavBar;

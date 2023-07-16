import { Container, Navbar, Form } from "react-bootstrap";
import getMovies from "../utils/getMovies";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { setSearchQuery } from "../redux/actions/movieActions";

const NavBar = () => {

  const [searchParams, setSearchParams] = useSearchParams({});

  const searchQuery = searchParams.get("query") || "";
  const pageQuery = searchParams.get("page") || 1;


  const dispatch = useDispatch();


  const searchForMovies = ({ target, initialParam }) => {
    const query = target?.value ?? initialParam;

    if (query) {
      setSearchParams({ query: query, page: target?.value?1:pageQuery });
    }
    
    if(window.location.pathname === "/"){
      getMovies({ query, dispatch, page: pageQuery });
    }
    
    dispatch(setSearchQuery(query));
  };

  useEffect(() => {
    searchForMovies({ initialParam: searchQuery });
  }, [pageQuery]);


  const initialSearchValue = useRef({value:""})
  useEffect(()=>{
    initialSearchValue.current.value = searchQuery
  },[])

  return (
    <Navbar className="bg-custom-brown py-3 position-sticky top-0 z-1 shadow-sm ">
      <Container >
        <Link to="/?page=1"><img src={logo} alt="MovieDB logo" className="nav-logo" /></Link>

        <Form.Control
          type="search"
          placeholder="ابحث ..."
          className="ms-4"
          aria-label="ابحث"
          onChange={searchForMovies}
          ref={initialSearchValue}
          />

      </Container>
    </Navbar>
  );
};

export default NavBar;

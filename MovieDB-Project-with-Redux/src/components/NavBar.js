import { Container, Navbar, Form } from "react-bootstrap";
import getMovies from "../utils/getMovies";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { setSearchQuery } from "../redux/actions/movieActions";

const NavBar = () => {

  const [searchParams, setSearchParams] = useSearchParams({});

  const searchQuery = searchParams.get("query")
  const pageQuery = searchParams.get("page")


  const dispatch = useDispatch();


  const changeParams = ({ target}) => {
    if(window.location.pathname === "/"){
      setSearchParams({ query:target.value, page:1 });
    }
  };
  
  // search by params
  const searchForMovies = ()=>{
    if(window.location.pathname === "/"){
      if(!pageQuery){
        return setSearchParams({page:1})
      }
      dispatch(setSearchQuery(searchQuery))
      getMovies({ query:searchQuery, dispatch, page:pageQuery??1});
    }
  }

  useEffect(() => {
    searchForMovies();
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
          value={searchQuery??""}
          />

      </Container>
    </Navbar>
  );
};

export default NavBar;

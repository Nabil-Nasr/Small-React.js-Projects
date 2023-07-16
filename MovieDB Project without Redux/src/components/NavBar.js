import { Container, Navbar, Form } from "react-bootstrap";
import getMovies from "../utils/getMovies";
import logo from "../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ setMoviesData, setSearchQuery }) => {

  const navigate = useNavigate();

  const searchForMovies = event => {
    navigate('/',{replace:true});
    const query = event.target.value;
    getMovies({ query, setMoviesData });
    setSearchQuery(query);
  };

  return (
    <Navbar className="bg-custom-brown py-3 position-sticky top-0 z-1 shadow-sm ">
      <Container >
        <Link to="/"><img src={logo} alt="MovieDB logo" className="nav-logo" /></Link>

        <Form.Control
          type="search"
          placeholder="ابحث ..."
          className="ms-4"
          aria-label="ابحث"
          onInput={searchForMovies}
        />

      </Container>
    </Navbar>
  );
};

export default NavBar;

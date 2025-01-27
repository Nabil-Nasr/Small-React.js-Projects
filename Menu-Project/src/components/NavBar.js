import { useRef } from 'react';
import { Container, Navbar, Nav, Form } from "react-bootstrap";



const NavBar = ({ setMealsData, originalMeals = [] }) => {

  const searchValue = useRef(null);

  const search = (event) => {
    event.preventDefault();

    const categoryButton = document.querySelector(`.active`);

    const { category } = categoryButton.dataset;

    if (searchValue.current.value === "") {
      if (category === "الكل" || category.toLowerCase() === "all")
        setMealsData(originalMeals);
      else
        setMealsData(originalMeals.filter(meal => meal.category === category));

      return;
    }


    const filteredBySearch = originalMeals.filter(meal => meal.name.includes(searchValue.current.value));
    if (category === "الكل" || category.toLowerCase() === "all") {
      setMealsData(filteredBySearch);
    } else {
      const filteredByCategory = filteredBySearch.filter(meal => meal.category === category);
      setMealsData(filteredByCategory);
    }
  };

  return (
    <Navbar expand="md" className="bg-dark" variant="dark">
      <Container>
        <Navbar.Brand href="#" className="text-warning">مطعم الكينجو</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex" onChange={search} onSubmit={search}>
            <Form.Control
              type="search"
              placeholder="ابحث ..."
              aria-label="ابحث"
              ref={searchValue}
              className="shadow-none border-warning"
            />

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

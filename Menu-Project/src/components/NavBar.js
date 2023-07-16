import {useRef} from 'react'
import { Container, Navbar ,Nav, Form, Button} from "react-bootstrap";



const NavBar = ({setMealsData,originalMeals=[]}) => {

  const searchValue = useRef(null)

  const search = (event) => {
    event.preventDefault()

    const categoryButton = document.querySelector(`.active`)
    categoryButton.click()
    if (searchValue.current.value==="") return 
    
    const {category}=categoryButton.dataset

    const filteredBySearch = originalMeals.filter(meal=>meal.name.includes(searchValue.current.value))

    if(category === "الكل" || category.toLowerCase() === "all"){
      setMealsData(filteredBySearch)
    }else{
      const filteredByCategory = filteredBySearch.filter(meal=>meal.category===category)
      setMealsData(filteredByCategory)
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
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="ابحث ..."
              className="me-2"
              aria-label="ابحث"
              ref={searchValue}
            />
            <Button onClick={search}  className="bg-body btn-outline-warning 
            bg-hover">ابحث</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
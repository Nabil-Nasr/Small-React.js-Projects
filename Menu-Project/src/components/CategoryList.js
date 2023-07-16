import { Button, Col, Row } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";

const CategoryList = ({ categories = [], setMealsData, originalMeals = [] }) => {

  const addActiveClass = (event) => {
    const activeButtons = document.querySelectorAll("[data-category]");
    activeButtons.forEach(button => button.classList.remove("active"));
    event.target.classList.add("active");
  };

  const filterByCategory = (event) => {

    const { category } = event.target.dataset;
    if (category === "الكل" || category.toLowerCase() === "all") {
      setMealsData(originalMeals);
    } else {
      const filteredMeals = originalMeals.filter(meal => category === meal.category);
      setMealsData(filteredMeals);
    }

    addActiveClass(event);
  };


  return (
    <Row>
      <Col sm="12" className="d-flex gap-3 justify-content-center mt-2 mb-5 flex-wrap ">
        <Bounce right>
          {
            categories.map((category, index) =>
              <Button key={index} data-category={category} onClick={filterByCategory} variant="outline-warning"
              className={`text-dark ${category === "الكل" || category.toLowerCase() === "all"?"active":""}`}>{category}</Button>
            )
          }
        </Bounce>
      </Col>
    </Row>
  );
};

export default CategoryList;

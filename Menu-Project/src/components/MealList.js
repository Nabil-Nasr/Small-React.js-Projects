import { Card } from "react-bootstrap";
import {Fade} from "react-awesome-reveal";

if (typeof window.IntersectionObserver === "undefined") {
  await import("intersection-observer");
}

const MealList = ({ mealsData = [] }) =>
  (
    <div class="cards">
      <Fade triggerOnce >
      {
        mealsData.map(meal =>
            <Card key={meal.id}  className="flex-row mb-3 bg-body-tertiary  ">
              <Card.Img className="food-image" src={meal.imagePath} />
              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <Card.Title>{meal.name}</Card.Title>
                  <div className="text-danger text-center  fw-bold">{meal.price} جنيه</div>
                </div>
                <Card.Text>{meal.description}</Card.Text>
              </Card.Body>
            </Card>
        )
      }
      </Fade>
    </div>
  );


export default MealList;

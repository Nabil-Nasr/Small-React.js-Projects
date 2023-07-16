import { Card } from "react-bootstrap";
import Fade  from "react-reveal/Fade";

const MealList = ({ mealsData = [] }) =>
  (
    <div class="cards">
      {
        mealsData.map((meal,index) =>
      <Fade key={meal.id} left={index%2===0} right={index%2!==0}>
            <Card  className="flex-row mb-3 bg-body-tertiary  ">
              <Card.Img className="food-image" src={meal.imagePath} />
              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <Card.Title>{meal.name}</Card.Title>
                  <div className="text-danger  fw-bold">{meal.price} جنيه</div>
                </div>
                <Card.Text>{meal.description}</Card.Text>
              </Card.Body>
            </Card>
      </Fade>
        )
      }
    </div>
  );


export default MealList;

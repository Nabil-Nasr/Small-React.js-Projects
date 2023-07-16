import { Col, Row } from "react-bootstrap";
import Person from "./Person";


const DatesList = ({persons}) => 
    <Row className="justify-content-center">
    <Col sm="8">
      <div className="rectangle bg-white p-2">
        {
          // using id is better than using index because using index is the default behavior and may cause errors if the array order changed
          persons.length ? 
          persons.map(person => (<Person key={person.id} name={person.name} date={person.date} imagePath={person.imagePath} />)) :
          <h2 className="text-center p-5">لا يوجد مواعيد اليوم</h2>
        }
      </div>
    </Col>
  </Row>


export default DatesList;
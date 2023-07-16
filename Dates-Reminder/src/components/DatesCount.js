import { Col, Row } from "react-bootstrap";

const DatesCount = ({persons}) =>           
  <Row className="justify-content-center">
  <Col sm="8">
    لديك {persons.length} مواعيد
  </Col>
  </Row>

export default DatesCount
import { Col, Row } from "react-bootstrap";

const DatesActions = ({showDates,deleteDates}) =>
  <Row className="justify-content-center my-2">
  <Col sm="8" className="d-flex justify-content-between">
      <button onClick={deleteDates} className="btn btn-danger">مسح الكل</button>
      <button onClick={showDates} className="btn btn-primary me-1">عرض المواعيد</button>
  </Col>
  </Row>

export default DatesActions;
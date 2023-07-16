import { Col, Row } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";

const Header = () => {
  return (
    <Row>
      <Bounce left>
        <Col sm="12" className="text-center">
          <h1 className="text-success pb-3 pt-5 ">قائمة الطعام</h1>
          <p className="underline"></p>
        </Col>
      </Bounce>
    </Row>
  );
};

export default Header;
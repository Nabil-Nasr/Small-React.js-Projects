import { Col, Container, Row } from "react-bootstrap";
import FormInput from "./components/FormInput";
import QandAList from "./components/QandAList";
import { QA } from "./data";
import { useState } from "react";



const App = () => {
  const [QAData,setQAData] = useState(QA)

  return (
    <div className="bg-body-tertiary">
      <Container className="py-5 ">
        <Row className="justify-content-center ">
          <Col sm="4">
            <div className="fs-3 text-center ">أسئلة وأجوبة شائعة</div>
          </Col>
          <Col sm="8">
            <FormInput QandAList={QAData} setQAData={setQAData}/>
            <QandAList QandAList={QAData} setQAData={setQAData}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;

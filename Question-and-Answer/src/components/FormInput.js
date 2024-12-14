import { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { notify } from "./ActionMessageContainer";



const FormInput = ({ QandAList = [], setQAData }) => {

  const question = useRef("");
  const answer = useRef("");

  const addQA = () => {
    const { value: answerValue } = answer.current;
    const { value: questionValue } = question.current;

    if (questionValue === "" || answerValue === "") {
      return notify("من فضلك أكمل البيانات", "warning");
    }

    const newQAData = [{ question: questionValue, answer: answerValue, id: Date.now() }].concat(QandAList);
    setQAData(newQAData);

    localStorage.QAData = JSON.stringify(newQAData);

    question.current.value = "";
    answer.current.value = "";
    notify("تم الإضافة بنجاح", "success");
  };

  return (
    <>
      <Row className="row-gap-2 mb-2">
        <Col sm="5" className="pe-sm-1">
          <Form.Control type="text" ref={question} placeholder="أدخل السؤال" />
        </Col>
        <Col sm="5" className="ps-sm-1">
          <Form.Control type="text" ref={answer} placeholder="أدخل الإجابة" />
        </Col>
        <Col sm="2" className="ps-sm-0"> 
          <Button  onClick={addQA} variant="primary" className="w-100 m-0 ">إضافة</Button>
        </Col>
      </Row>
    </>
  );
};

export default FormInput;
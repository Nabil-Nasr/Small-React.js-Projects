import { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ActionMessageContainer, { notify } from "./ActionMessageContainer";



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
        <Col sm="5" >
          <Form.Control type="text" ref={question} placeholder="أدخل السؤال" />
        </Col>
        <Col sm="5">
          <Form.Control type="text" ref={answer} placeholder="أدخل الإجابة" />
        </Col>
        <Col sm="2">
          <Button onClick={addQA}>إضافة</Button>
        </Col>
      </Row>
      <ActionMessageContainer />
    </>
  );
};

export default FormInput;
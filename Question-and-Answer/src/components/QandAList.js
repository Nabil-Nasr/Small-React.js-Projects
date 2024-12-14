import { Accordion, Button, Row } from "react-bootstrap";
import  { notify } from "./ActionMessageContainer";


const QandAList = ({ QandAList = [],setQAData }) =>{
  
  const deleteQA = (deletionId)=>
    ()=>{
      const newQAData = QandAList.filter(QA=>QA.id!==deletionId)
      setQAData(newQAData)
      localStorage.QAData=JSON.stringify(newQAData)
      notify("تم إزالة السؤال بنجاح","success")
    }
  
  const  deleteQAs = ()=>{
      setQAData([])
      localStorage.QAData=JSON.stringify([])
      notify("تم إزالة الكل بنجاح","success")
    }

  return (  
  <>
      <Row>
        <Accordion alwaysOpen>
          {
              QandAList.map((QandA,index) =>
              <Accordion.Item key={QandA.id} eventKey={index}>
                <Accordion.Header>{QandA.question}</Accordion.Header>
                <Accordion.Body>
                  {QandA.answer}
                  <Button variant="danger" className="me-1 py-1" onClick={deleteQA(QandA.id)}>إزالة</Button>
                </Accordion.Body>
              </Accordion.Item>
            )
          }
        </Accordion>
      </Row>
      {QandAList.length ? 
      <Button onClick={deleteQAs} variant="danger" className="w-100 mt-2">إزالة الكل</Button> :
      <h2 className="text-center my-2">لا يوجد أسئلة</h2>}
      
    </>
  )

}





export default QandAList;
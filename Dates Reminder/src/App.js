import { Container } from "react-bootstrap";
import DatesList from "./components/DatesList";
import DatesCount from "./components/DatesCount";
import DatesActions from "./components/DatesActions";
import { persons } from "./data";
import { useState } from "react";



const App = () => {
  const [personsData, setPersonsData] = useState([]);
  const deleteDates = () => setPersonsData([]);
  const showDates = () => setPersonsData(persons);

  return (
    <div className="bg-body-tertiary">
      <Container className="py-5 ">
        <DatesCount persons={personsData} />
        <DatesList persons={personsData} />
        <DatesActions deleteDates={deleteDates} showDates={showDates} />
      </Container>
    </div>
  );
};

export default App;

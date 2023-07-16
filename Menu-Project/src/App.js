import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import CategoryList from "./components/CategoryList";
import MealList from "./components/MealList";
import { categories, meals } from "./data";
import { useState } from "react";




const App = () => {
  const [mealsData,setMealsData] = useState(meals)

  return (
    <>
      <NavBar mealsData={mealsData} setMealsData={setMealsData} originalMeals={meals}/>
      <Container>
        <Header/>
        <CategoryList categories={categories} setMealsData={setMealsData} originalMeals={meals}/>
        <MealList mealsData={mealsData}/>
      </Container>
    </>
  );
};

export default App;

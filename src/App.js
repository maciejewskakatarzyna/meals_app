import React, { useState } from 'react';
import { meals as mealsData } from 'data';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Form from 'components/Form/Form';
import Header from 'components/Header/Header';
import List from 'components/List/List';
import Card from 'components/Card/Card';

export const MealsContext = React.createContext({
  meals: [],
  handleAddMeal: () => {},
  deleteMeal: () => {},
});

const App = () => {
  const [isCardOpen, setCard] = useState(false);
  const [isFormOpen, setForm] = useState(false);
  const [meals, setMeals] = useState(mealsData);

  const deleteMeal = name => {
    const filteredMeals = meals.filter(meal => meal.name !== name);
    setMeals(filteredMeals);
  };

  const toggleForm = () => {
    isFormOpen ? setForm(false) : setForm(true);
  };

  const toggleCard = () => {
    isCardOpen ? setCard(false) : setCard(true);
  };

  const handleAddMeal = values => {
    const newMeal = {
      name: values.name,
      link: values.link,
      image: values.image,
    };

    setMeals([...meals, newMeal]);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MealsContext.Provider value={{ meals, handleAddMeal, deleteMeal }}>
          <Header toggleForm={toggleForm} />
          <List toggleCard={toggleCard}></List>
          {isCardOpen && <Card toggleCard={toggleCard}></Card>}
          {isFormOpen && <Form toggleForm={toggleForm}></Form>}
        </MealsContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;

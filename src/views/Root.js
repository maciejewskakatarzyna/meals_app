import React, { useState } from 'react';
import { meals as mealsData } from 'data';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Form from 'components/Form/Form';
import List from 'components/List/List';
import Card from 'components/Card/Card';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

export const MealsContext = React.createContext({
  meals: [],
  handleAddMeal: () => {},
  deleteMeal: () => {},
});

export const FormContext = React.createContext({
  toggleForm: () => {},
});

const Root = () => {
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
        <FormContext.Provider value={{ toggleForm }}>
          <MainTemplate>
            <MealsContext.Provider value={{ meals, handleAddMeal, deleteMeal }}>
              <List toggleCard={toggleCard}></List>
              {isCardOpen && <Card toggleCard={toggleCard}></Card>}
              {isFormOpen && <Form toggleForm={toggleForm}></Form>}
            </MealsContext.Provider>
          </MainTemplate>
        </FormContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default Root;

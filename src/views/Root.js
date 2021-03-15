import React, { useState } from 'react';
import { meals as mealsData } from 'data';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Form from 'components/Form/Form';
import List from 'components/List/List';
import Card from 'components/Card/Card';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dinners from './Dinners';
import Desserts from './Desserts';
import Sappers from './Sappers';

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
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <FormContext.Provider value={{ toggleForm }}>
          <MainTemplate>
            <MealsContext.Provider value={{ meals, handleAddMeal, deleteMeal }}>
              <Switch>
                <Route exact path='/'>
                  <List toggleCard={toggleCard}></List>
                </Route>
                <Route path='/dinners' component={Dinners} />
                <Route path='/desserts' component={Desserts} />
                <Route path='/sappers' component={Sappers} />
              </Switch>
              {/* {isCardOpen && <Card toggleCard={toggleCard}></Card>} */}
              {isFormOpen && <Form toggleForm={toggleForm}></Form>}
            </MealsContext.Provider>
          </MainTemplate>
        </FormContext.Provider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;

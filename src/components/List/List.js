import React, { useContext } from 'react';
import ListItem from 'components/List/ListItem';
import { MealsContext } from 'views/Root';
import { Wrapper } from './List.styles';

const List = ({ toggleCard }) => {
  const { meals } = useContext(MealsContext);

  return (
    <Wrapper>
      {meals.map(meal => (
        <ListItem onClick={() => toggleCard()} key={meal.title} {...meal} />
      ))}
    </Wrapper>
  );
};

export default List;

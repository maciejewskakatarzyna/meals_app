import React, { useContext } from 'react';
import styles from './List.module.scss';
import ListItem from 'components/List/ListItem';
import { MealsContext } from 'App';

const List = ({ toggleCard }) => {
  const { meals } = useContext(MealsContext);

  return (
    <ul className={styles.wrapper}>
      {meals.map(meal => (
        <ListItem onClick={() => toggleCard()} key={meal.title} {...meal} />
      ))}
    </ul>
  );
};

export default List;

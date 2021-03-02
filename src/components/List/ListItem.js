import React, { useContext } from 'react';
import styles from './ListItem.module.scss';
import { MealsContext } from 'App';

const ListItem = ({ name, image, ...props }) => {
  const { deleteMeal } = useContext(MealsContext);

  return (
    <li className={styles.listItem} {...props}>
      <img className={styles.listItemImg} src={image} alt={name} />
      <div className={styles.listItemTitle}>
        <p>{name}</p>
        <button onClick={() => deleteMeal(name)}>x</button>
      </div>
    </li>
  );
};

export default ListItem;

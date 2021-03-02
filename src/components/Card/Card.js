import React from 'react';
import styles from './Card.module.scss';
import Button from 'components/Button/Button';

const Card = ({ toggleCard }) => ({ items, index }) => (
  <div className={styles.wrapper}>
    <div className={styles.info}>
      <Button onClick={() => toggleCard()} closeBtn></Button>

      <h1 className={styles.title}>{items[index + 1].title}</h1>
      <ul>
        {items[index + 1].type === 'dessert' ? <li>deser</li> : null}
        <li>{items[index + 1].vege ? `vege` : `mięsne`}</li>
        <li>{items[index + 1].hot ? `na gorąco` : `na zimno`}</li>
        <li>{items[index + 1].sweet ? `na słodko` : `na słono`}</li>
        <li>{items[index + 1].soup ? `zupa` : null}</li>
        <li>{items[index + 1].salad ? `sałatka` : null}</li>
      </ul>
      <a className={styles.link} href={items[index + 1].link}>
        Sprawdź przepis!
      </a>
      <div className={styles.btnSection}>
        <Button>Dodaj do kalendarza</Button>
        <Button secondary>Usuń danie</Button>
      </div>
    </div>
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        src={items[index + 1].image}
        alt={items[index + 1].title}
      />
    </div>
  </div>
);

export default Card;

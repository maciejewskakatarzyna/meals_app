import React, { useState, useContext } from 'react';
import styles from './Form.module.scss';
import Button from 'components/Button/Button';
import { MealsContext } from 'App';

const initialFormState = {
  name: '',
  link: '',
  image: '',
};

const Form = ({ toggleForm, addItem }) => {
  const [formValues, setFormValues] = useState(initialFormState);
  const { handleAddMeal } = useContext(MealsContext);

  const handleInputChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitMeal = e => {
    e.preventDefault();
    handleAddMeal(formValues);
    setFormValues(initialFormState);
  };

  return (
    <div className={styles.wrapper}>
      <Button closeBtn onClick={() => toggleForm()}></Button>
      <h1 className={styles.title}>Dodaj nowe danie</h1>
      <form className={styles.form} onSubmit={handleSubmitMeal}>
        <div className={styles.formItem}>
          <input
            className={styles.input}
            type='text'
            name='name'
            value={formValues.name}
            onChange={handleInputChange}
            placeholder=' '
          ></input>
          <label className={styles.label} htmlFor='name'>
            Nazwa
          </label>
          <div className={styles.formItemBar} />
        </div>
        <div className={styles.formItem}>
          <input
            className={styles.input}
            type='text'
            name='link'
            value={formValues.link}
            onChange={handleInputChange}
            placeholder=' '
          ></input>
          <label className={styles.label} htmlFor='link'>
            Link
          </label>
          <div className={styles.formItemBar} />
        </div>
        <div className={styles.formItem}>
          <input
            className={styles.input}
            type='text'
            name='image'
            value={formValues.image}
            onChange={handleInputChange}
            placeholder=' '
          ></input>
          <label className={styles.label} htmlFor='image'>
            Zdjęcie
          </label>
          <div className={styles.formItemBar} />
        </div>

        <Button type='submit'>Dodaj nowe danie</Button>
      </form>
    </div>
  );
};

export default Form;

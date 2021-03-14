import React, { useState, useContext } from 'react';
import Button from 'components/Button/Button';
import { MealsContext } from 'App';
import {
  Wrapper,
  FormContainer,
  FormItem,
  Input,
  Label,
  FormItemBar,
} from './Form.styles';
import { StyledCloseButton } from 'components/Button/Button.styles';

const initialFormState = {
  name: '',
  link: '',
  image: '',
};

const Form = ({ toggleForm }) => {
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
    <Wrapper>
      <StyledCloseButton onClick={() => toggleForm()}></StyledCloseButton>
      <h1>Dodaj nowe danie</h1>
      <FormContainer onSubmit={handleSubmitMeal}>
        <FormItem>
          <Input
            type='text'
            name='name'
            value={formValues.name}
            onChange={handleInputChange}
            placeholder=' '
          ></Input>
          <Label htmlFor='name'>Nazwa</Label>
          <FormItemBar />
        </FormItem>
        <FormItem>
          <Input
            type='text'
            name='link'
            value={formValues.link}
            onChange={handleInputChange}
            placeholder=' '
          ></Input>
          <Label htmlFor='link'>Link</Label>
          <FormItemBar />
        </FormItem>
        <FormItem>
          <Input
            type='text'
            name='image'
            value={formValues.image}
            onChange={handleInputChange}
            placeholder=' '
          ></Input>
          <Label htmlFor='image'>Zdjęcie</Label>
          <FormItemBar />
        </FormItem>

        <Button type='submit'>Dodaj nowe danie</Button>
      </FormContainer>
    </Wrapper>
  );
};

export default Form;

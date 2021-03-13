import React, { useContext } from 'react';
import { MealsContext } from 'App';
import { Wrapper, Image, Title } from './ListItem.styles';
import DeleteButton from 'components/Button/DeleteButton';

const ListItem = ({ name, image, ...props }) => {
  const { deleteMeal } = useContext(MealsContext);

  return (
    <Wrapper {...props}>
      <Image src={image} alt={name} />
      <Title>
        <p>{name}</p>
        <DeleteButton onClick={() => deleteMeal(name)}></DeleteButton>
      </Title>
    </Wrapper>
  );
};

export default ListItem;

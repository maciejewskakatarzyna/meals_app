import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/Icons/removeIcon.svg';
import { StyledDeleteButton } from './DeleteButton.styles';

const DeleteButton = props => (
  <StyledDeleteButton {...props}>
    <DeleteIcon></DeleteIcon>
  </StyledDeleteButton>
);

export default DeleteButton;

import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/Icons/removeIcon.svg';
import styles from './DeleteButton.module.scss';

const DeleteButton = props => (
  <button {...props}>
    <DeleteIcon></DeleteIcon>
  </button>
);

export default DeleteButton;

import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ children, secondary, closeBtn, ...props }) => {
  // let buttonClass;
  // if (!closeBtn) {
  //   buttonClass = secondary ? styles.secondary : styles.button;
  // } else buttonClass = styles.closeButton;

  return <StyledButton {...props}>{children}</StyledButton>;
};
export default Button;

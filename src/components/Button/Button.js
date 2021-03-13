import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, secondary, closeBtn, ...props }) => {
  let buttonClass;
  if (!closeBtn) {
    buttonClass = secondary ? styles.secondary : styles.button;
  } else buttonClass = styles.closeButton;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};
export default Button;

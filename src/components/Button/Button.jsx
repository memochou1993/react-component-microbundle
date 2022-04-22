import React from 'react';
import styles from './index.css';

const Button = (props) => {
  const {
    name,
    onClick,
    type,
    label,
  } = props;
  return (
    <button
      className={styles.base}
      name={name}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;

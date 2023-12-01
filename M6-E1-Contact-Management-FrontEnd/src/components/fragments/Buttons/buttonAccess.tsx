import React from 'react';
import './styles.buttonAccess.css'
import './styles.buttonCreate.css'

interface IButtonToAccess {
  type: string;
  text: string;
  styles: string; // Alterado para string para aceitar a classe CSS
}

export const ButtonToAccess: React.FC<IButtonToAccess> = ({ type, text, styles, ...rest }) => {
  return (
    <button className={`btnAccess ${styles}`} {...rest}>
      {text}
    </button>
  );
};
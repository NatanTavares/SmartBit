import React from 'react';

import './styles.css';

interface IButtonProps {
  type?: string;
}

function Button (props: IButtonProps) {
  return (
    <div className="button-component">
      <button className={props.type || 'primary'}>
        Nossos Serviços
      </button>
    </div>
  );
}

export default Button;

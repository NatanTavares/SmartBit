import React from 'react';

import './styles.css';

interface IStepProps {
  title: string;
  description: string;
  left: boolean;
}

function Step(props: IStepProps) {
  return (
    <div className={`step ${props.left ? 'left' : 'right'}`}>
      <div className='circle'>
        {/* SVG */}
        {/* Icon */}
        <p>icon</p>
      </div>
      <div className="text-zone">
        <h5>{props.title}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Step;

import React from 'react';

interface IStepProps {
  title: string;
  description: string;
  left: boolean;
}

function Step(props: IStepProps) {
  return (
    <div className="step">
      <div className={`circle-${props.left ? 'left' : 'right'}`}>
        {/* SVG */}
        {/* Icon */}
      </div>
      <h5>{props.title}</h5>
      <p>{props.description}</p>
    </div>
  );
}

export default Step;

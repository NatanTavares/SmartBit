import React from 'react';
import { FaMapMarkedAlt, FaScroll, FaRegFileAlt } from 'react-icons/fa';

import './styles.css';


interface IStepProps {
  title: string;
  description: string;
  shape: string;
}

function Step(props: IStepProps) {
  function getIcons() {
    switch (props.title) {
      case "Planejamento da Ideia":
        return <FaMapMarkedAlt size="72px" color="white" />
      case "Descrição das Funcionalidades":
        return <FaScroll size="72px" color="white" />
      default:
        return <FaRegFileAlt size="72px" color="white" />
    } 
  }

  return (
    <div className={`step`}>
      <div className='circle'>
        <img src={props.shape} alt="" width={160} />
        <div className="icon">
          {getIcons()}
        </div>
      </div>
      <div className="text-zone">
        <h5>{props.title}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Step;

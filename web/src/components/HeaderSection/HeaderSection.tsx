import React from 'react';
import { FaRocket } from 'react-icons/fa';

import './styles.css';

interface IHeaderSectionProps{
  title: string;
  content: string;
}

function HeaderSection(props: IHeaderSectionProps) {
  return (
    <div className="header-section">
      <div className="header-services-section">
        <h2>{props.title}</h2>
        <div className="icon">
          <FaRocket size={'30px'} />
        </div>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default HeaderSection;
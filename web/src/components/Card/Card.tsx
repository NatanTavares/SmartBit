import React, { useEffect, useState } from 'react';
import { IconType } from 'react-icons';

import { FaCloud, FaDesktop, FaLayerGroup, FaMobileAlt, FaPen, FaSearch } from 'react-icons/fa';

import './styles.css';

interface ICardProps {
  title: string;
  description: string;
  shape: string;
}

function Card(props: ICardProps) {
  function definedIcons(title: string) {
    switch(title) {
      case "Sites":
        return <FaDesktop size={'30px'} />;
      
      case "Apps":
        return <FaMobileAlt size={'30px'} />;
      
      case "Sistemas":
        return <FaLayerGroup size={'30px'}/>;

      case "SEO":
        return <FaSearch size={'30px'} />;

      case "DevOps":
        return <FaCloud size={'30px'} />;

      default:
        return <FaPen size={'30px'} />;
    }
  }

  return (
    <div className="card">
      <div className="card-header">
        <img 
          src={props.shape} 
          className="shape" 
          alt="shape" 
        />

        <div className="icon">  
            {definedIcons(props.title)}
        </div>        
      </div>

      <h3>{props.title || 'Title'}</h3>
      <div className="card-description">
        <p>{props.description || "Description"}</p>
      </div>
    </div>
  );
}

export default Card;

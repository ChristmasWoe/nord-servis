import React from 'react';
import './PrincipleCard.css';

const PrincipleCard = ({ content }) => {
  return (
    <div className="principle-card">
      <div className="principle-card-content">{content}</div>
    </div>
  );
};
export default PrincipleCard;

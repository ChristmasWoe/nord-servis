import React from 'react';
import './LinkedCard.css';

const LinkedCard = ({ content }) => {
  return (
    <div className="linked-card">
      <div className="linked-card-content">{content}</div>
    </div>
  );
};
export default LinkedCard;

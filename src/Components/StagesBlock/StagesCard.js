import React from 'react';
import './StagesCard.css';

const StagesCard = ({ title, content }) => {
  const renderedContent = content.map((line, i) => {
    return <div key={i}>{line}</div>;
  });

  return (
    <div className="stages-card">
      <div className="stages-card-content">{renderedContent}</div>
    </div>
  );
};
export default StagesCard;

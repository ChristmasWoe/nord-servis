import React from 'react';
import './GassWellsBlock.css';

const GassWellsBlock = () => {
  const title = 'Строительство и реконструкция нефтяных и газовых скважин';
  const content = [
    'Буровые установки типа БУ 5000/320 ЭК-БМЧ',
    'Установки типа ZJ-30 грузоподъемностью 180т',
    'Установки типа ZJ-40 грузоподъемностью 225т',
  ];
  return (
    <div className="gass-wells-block">
      <div className="gass-wells-title">{title}</div>
      <div className="gass-wells-content-block">
        <div className="gass-wells-content1">{content[0]}</div>
        <div className="gass-wells-content2">{content[1]}</div>
        <div className="gass-wells-content3">{content[2]}</div>
      </div>
    </div>
  );
};
export default GassWellsBlock;

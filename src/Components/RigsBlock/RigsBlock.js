import React from 'react';
import './RigsBlock.css';

const RigsBlock = () => {
  const title = 'Строительство и реконструкция нефтяных и газовых скважин';
  const content = [
    'Буровые установки типа БУ 5000/320 ЭК-БМЧ',
    'Установки типа ZJ-30 грузоподъемностью 180т',
    'Установки типа ZJ-40 грузоподъемностью 225т',
  ];
  const renderedRigs = content.map((rig,i) => {
    return <div key={i} className="rig">{rig}</div>;
  });
  return (
    <div className="rigs-block">
      <div className="rigs-title">{title}</div>
      <div className="rigs-content-block">{renderedRigs}</div>
    </div>
  );
};
export default RigsBlock;

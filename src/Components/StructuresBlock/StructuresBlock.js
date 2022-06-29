import React from 'react';
import './StructuresBlock.css';

const StructuresBlock = () => {
  const title = 'Интегрированное управление проектом - типовая структура';
  const highlightedContent = [
    'Менеджер ОТ, ПБ и оос',
    'Руководитель проекта',
    'Главный инженер проекта',
  ];
  const structuresContent = [
    [
      'Руководитель группы МТО и логистики (база/офис)',
      'Логист',
      'Геолог',
      'Экономист',
      'Сметчик',
      'Дневной супервайзер',
    ],
    [
      'Ночной супервайзер',
      'Инженер по закачиванию скважин',
      'Инженер по бурению',
      'Полевой инженер по закачиванию скважин',
      'Супервайзер по закачиванию скважин',
    ],
  ];
  const renderedHlContent = highlightedContent.map((hlLine) => {
    return <div className="highlighted-line">{hlLine}</div>;
  });
  const renderedColumns = structuresContent.map((column) => {
    const renderedStructuresLines = column.map((line) => {
      return <div className="structures-line">{line}</div>;
    });
    return <div className="structures-column">{renderedStructuresLines}</div>;
  });

  return (
    <div className="structures-block">
      <div className="structures-block-title">{title}</div>
      <div className="highlighted-content-block">{renderedHlContent}</div>
      <div className="structures-content-block">{renderedColumns}</div>
    </div>
  );
};
export default StructuresBlock;

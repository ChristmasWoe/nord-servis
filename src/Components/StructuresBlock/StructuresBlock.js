import React from 'react';
import './StructuresBlock.css';

const StructuresBlock = () => {
  const title = 'Интегрированное управление проектом - типовая структура';
  const highlightedContent = [
    'Менеджер ОТ, ПБ и оос',
    'Руководитель проекта',
    'Главные инженер проекта',
  ];
  const contentColumn1 = [
    'Руководитель группы МТО и логистики (база/офис)',
    'Логист',
    'Геолог',
    'Экономист',
    'Сметчик',
    'Дневной супервайзер',
    'Ночной супервайзер',
  ];
  const contentColumn2 = [
    'Инженер по закачиванию скважин',
    'Инженер по бурению',
    'Полевой инженер по закачиванию скважин',
    'Супервайзер по закачиванию скважин',
  ];
  return (
    <div className="structures-block">
      <div className="structures-block-title">{title}</div>
      <div className="highlighted-content-block">
        <div className="highlighted-content1">{highlightedContent[0]}</div>
        <div className="highlighted-content2">{highlightedContent[1]}</div>
        <div className="highlighted-content3">{highlightedContent[2]}</div>
      </div>
      <div className="structures-content-block">
        <div className="content-column1">
          <div className="column1-content1">{contentColumn1[0]}</div>
          <div className="column1-content2">{contentColumn1[1]}</div>
          <div className="column1-content3">{contentColumn1[2]}</div>
          <div className="column1-content4">{contentColumn1[3]}</div>
          <div className="column1-content5">{contentColumn1[4]}</div>
          <div className="column1-content6">{contentColumn1[5]}</div>
          <div className="column1-content7">{contentColumn1[6]}</div>
        </div>
        <div className="content-column2">
          <div className="column2-content1">{contentColumn2[0]}</div>
          <div className="column2-content2">{contentColumn2[1]}</div>
          <div className="column2-content3">{contentColumn2[2]}</div>
          <div className="column2-content4">{contentColumn2[3]}</div>
        </div>
      </div>
    </div>
  );
};
export default StructuresBlock;

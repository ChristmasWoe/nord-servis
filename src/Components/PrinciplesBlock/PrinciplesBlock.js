import React from 'react';
import './PrinciplesBlock.css';
import PrincipleCard from './PrincipleCard';
import LinkedCard from './LinkedCard';
import Arrow from './Arrow';

const PrinciplesBlock = () => {
  const principlesBlockTitle = 'Принципы Компании';
  const principleCardContent = [
    { id: 0, content: 'Предоставление качественных сервисных услуг' },
    { id: 1, content: 'Привлечение опытного и квалифицированного персонала' },
    {
      id: 2,
      content: 'Соблюдение требований охраны труда, промышленной безопасности',
    },
    { id: 3, content: 'Четкая координация организации работ на объектах' },
  ];
  const paragraph =
    'Эффективным является сервис, обеспечивающий Заказчику максимальную оперативность производственных процессов, наиболее полную и достоверную информативность проведенных работ и прозрачность взаимоотношений со всеми';
  const linkedCardContent = [
    { id: 0, content: 'Интегрированное управление проектом' },
    { id: 1, content: 'Управление технологическими сервисами' },
    { id: 2, content: 'Супервайзинг' },
    { id: 3, content: 'Инженерный сервис' },
  ];
  return (
    <div className="principles-block">
      <div className="principles-block-title">{principlesBlockTitle}</div>
      <div className="principle-cards-block">
        <div className="principle-card-box">
          {/*Пофиксить отступы*/}
          <PrincipleCard
            id={principleCardContent[0].id}
            content={principleCardContent[0].content}
          />
          <PrincipleCard
            id={principleCardContent[1].id}
            content={principleCardContent[1].content}
          />
        </div>
        <div className="principle-card-box">
          <PrincipleCard
            id={principleCardContent[2].id}
            content={principleCardContent[2].content}
          />
          <PrincipleCard
            id={principleCardContent[3].id}
            content={principleCardContent[3].content}
          />
        </div>
      </div>
      <p className="principle-card-paragraph">{paragraph}</p>
      <div className="linked-cards-block">
        <LinkedCard
          styling="1"
          id={linkedCardContent[0].id}
          content={linkedCardContent[0].content}
        />
        <Arrow />
        <LinkedCard
          id={linkedCardContent[1].id}
          content={linkedCardContent[1].content}
        />
        <Arrow />

        <LinkedCard
          id={linkedCardContent[2].id}
          content={linkedCardContent[2].content}
        />
        <Arrow />

        <LinkedCard
          id={linkedCardContent[3].id}
          content={linkedCardContent[3].content}
        />
      </div>
    </div>
  );
};

export default PrinciplesBlock;

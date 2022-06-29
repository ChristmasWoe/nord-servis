import React from 'react';
import './ServicesBlock.css';

const ServicesBlock = () => {
  const title = 'Комплексные услуги в нефтедобывающем секторе';
  const content =
    'Строительная реконструкция нефтяных и газовых скважин, супервайзинг бурения, геонавигационное сопровождение направленного бурения скважин и боковых стволов (телеметрия), долотный сервисс (отбор керна, эксплуатация и техническое обслуживание гидравлических забойных двигателей), сервис буровых растворов, услуги по осушке шлама руо, осветление бурового раствора, транспортная доставка грузов';
  return (
    <div className="services-block">
      <div className="services-block-title">{title}</div>
      <div className="services-block-content">{content}</div>
    </div>
  );
};
export default ServicesBlock;

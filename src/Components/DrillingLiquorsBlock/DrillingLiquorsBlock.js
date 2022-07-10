import React from "react";
import LiquorTypes from "./LiquorTypes";
import "./DrillingLiquorsBlock.css";

const DrillingLiquorsBlock = () => {
  const title = "Сервис буровых растворов";
  const content =
    "Наш подход заключается в создании, подборе и применении систем буровых растворов, обеспечивающих безаварийные условия бурения и сохранение коллекторских свойств вскрываемых продуктивных отложений";
  return (
    <div className="drilling-block">
      <div className="drilling-block-title">{title}</div>
      <div className="drilling-block-content">
        {content}
        <LiquorTypes />
      </div>
    </div>
  );
};
export default DrillingLiquorsBlock;

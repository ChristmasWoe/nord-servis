import React from "react";
import "./DolotoVZDBlock.css";

const DolotoAndVZD = () => {
  const title = "Сопровождение долот и взд";
  const content =
    "Имеются винтовые забойные двигатели для бурения наклонно-направленных и горизонтальных скважин, различных типоразмеров от 95 мм до 240 мм с различным кинематическим соотношением двигательных секций. Забойные двигатели имеют возможность работы с любыми конструкциями породоразрушающего инструмента";
  return (
    <div className="dolotovzd-block">
      <div className="dolotovzd-block-title">{title}</div>
      <div className="dolotovzd-block-content">{content}</div>
    </div>
  );
};
export default DolotoAndVZD;

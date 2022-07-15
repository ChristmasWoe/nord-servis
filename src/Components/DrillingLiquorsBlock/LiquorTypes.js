import React from "react";
import "./LiquorTypes.css";

const liquorTypesContent = {
  title: "Типы буровых растворов",
  content: [
    "Соленасыщенный",
    "Полимер-глинистый",
    "Биополимерный",
    "Биополимерный ингибированный",
    "Гелево-эмульсионный",
    "Силикатно-эмульсионный",
    "Полимер-глинистый ингибированный",
    "Гипсо-известковый ингибированный",
    "Раствор на основе дивалентной соли",
    "Прямая эмульсия",
    "Раствор на углеводородной основе (РУО)",
  ],
};

const LiquorTypes = () => {
  const renderedContent = liquorTypesContent.content.map((line, i) => {
    return (
      <div className="stages-card-line" key={i}>
        {line}
      </div>
    );
  });

  return (
    <div className="liquor-list">
      <div className="liquor-list-title">{liquorTypesContent.title}</div>
      <div className="liquors">
        {liquorTypesContent.content.map((item, i) => {
          return (
            <span
              style={{
                marginRight: "40px",
                whiteSpace: "nowrap",
                display: "inline-block",
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default LiquorTypes;

import React from "react";

const Osvetlenie = () => {
  const title = "Осветление бурового раствора";
  const content =
    "Компания предоставляет услуги по переработке и осветлению бурового раствора РВО на установках ФСУ";
  return (
    <div className="osushka-block">
      <div className="osushka-block-title">{title}</div>
      <div className="osushka-block-content">{content}</div>
    </div>
  );
};
export default Osvetlenie;

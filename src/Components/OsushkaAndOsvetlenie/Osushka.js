import React from "react";
import "./Osushka.css";

const Osushka = () => {
  const title = "Услуги по осушки шлама РУО";
  const content =
    "Компания предоставляет услуги по осушки влажного шлама на установках УМОШ в процессе бурения скважин на РУО";
  return (
    <div className="osushka-block">
      <div className="osushka-block-title">{title}</div>
      <div className="osushka-block-content">{content}</div>
    </div>
  );
};
export default Osushka;

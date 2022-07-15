import React from "react";

const GeoNavigation = () => {
  const title = "Геонавигационное сопровождение";
  const content =
    "Распологаем самыми современными навигационными системами, включая телеметрические системы “ГЕОЛИНК”, APS с гидравлическим каналом передачи сигнала, с модулями гамма-каротажа и резистивиметрии. Применение современного оборудования для мониторинга оборудования для мониторинга процессов бурения (включая системы MWD & LWD)";
  return (
    <div className="supervising-block">
      <div className="supervising-block-title">{title}</div>
      <div className="supervising-block-content">{content}</div>
    </div>
  );
};
export default GeoNavigation;

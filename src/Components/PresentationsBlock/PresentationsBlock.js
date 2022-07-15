import React from "react";
import "./PresentationsBlock.css";

const PresentationsBlock = () => {
  const title = "Также ознакомтесь с полной информацией по ссылкам";

  return (
    <div className="presentaion-block">
      <div className="presentaion-block-title">{title}</div>
      <div className="presentaion-cards">
        <div className="presentation-card">
          <a href="https://drive.google.com/file/d/1v-ChM3M7Y7yywdjFJ_xikNYI8upTobms/view">
            <img src={"/pdfLogo.png"} className="pdfLogo" />
          </a>
          <p>Лаборатория.pdf</p>
        </div>
        <div className="presentation-card">
          <a href="https://drive.google.com/file/d/13EttsbQvZAFPYx-cgjsCelZsf8QFHOlJ/view">
            <img src={"/pdfLogo.png"} className="pdfLogo" />
          </a>
          <p>Система Спуска ОК.pdf</p>
        </div>
        <div className="presentation-card">
          <a href="https://drive.google.com/file/d/1OAcYcKk9nrAOXbGduD1QceenUy4EFF39/view">
            <img src={"/pdfLogo.png"} className="pdfLogo" />
          </a>
          <p>TRSD.pdf</p>
        </div>
      </div>
    </div>
  );
};
export default PresentationsBlock;

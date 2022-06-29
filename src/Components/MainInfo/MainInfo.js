import React from 'react';
import './MainInfo.css';

const MainInfo = () => {
  const mainInfoTitle = 'БУРЕНИЕ НЕФТЯНЫХ И ГАЗОВЫХ СКВАЖИН';
  const mainInfoContent =
    'Норд Сервис Ойл - молодая, быстроразвивающаяся современная сервисная компания, нацеленная на оказание качественных сервисных услуг нефтедобывающим компаниям';
  return (
    <div className="main-info">
      <div className="main-info-text-block">
        <div className="main-info-title">{mainInfoTitle}</div>
        <div className="main-info-content">{mainInfoContent}</div>
      </div>
      <div className="main-info-img-block">
        {/* <img className="lower-pic" src={'/picture.png'} /> */}
        <img className="upper-pic" src={'/picture.png'} />
      </div>
    </div>
  );
};

export default MainInfo;

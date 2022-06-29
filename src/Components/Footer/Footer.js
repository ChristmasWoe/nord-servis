import React from 'react';
import './Footer.css';

const Footer = () => {
  const email = 'Info@gmail.com';
  const mainTitle = 'Норд Сервис Ойл';
  const telephoneNumber = '8 800 532-53-53';
  return (
    <div className="footer">
      <div className="footer-email">{email}</div>
      <div className="footer-logo-title">
        <img className="footer-logo" src={'/logo.png'} />
        <div className="footer-main-title">{mainTitle}</div>
      </div>
      <div className="footer-telephone-number">{telephoneNumber}</div>
    </div>
  );
};
export default Footer;

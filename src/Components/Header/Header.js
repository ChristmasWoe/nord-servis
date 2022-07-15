import React from "react";
import "./Header.css";

const Header = () => {
  const mainTitle = "Норд Сервис Ойл";
  const telephoneNumber = "8 800 532-53-53";
  return (
    <div className="header">
      <img className="logo" src={"/logo.png"} />
      <div className="main-title">{mainTitle}</div>
      {/* <div className="telephone-number">{telephoneNumber}</div> */}
      {/* <button className="additional-content">
        <svg
          width="50"
          height="28"
          viewBox="0 0 50 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_4_20)">
            <rect x="0" y="24" width="50" height="4" rx="1" fill="#10B8F6" />
            <rect x="0" y="12" width="50" height="4" rx="1" fill="#10B8F6" />
            <rect x="0" y="0" width="50" height="4" rx="1" fill="#10B8F6" />
          </g>
          <defs>
            <filter
              id="filter0_d_4_20"
              x="0"
              y="0"
              width="50"
              height="28"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="7.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_4_20"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4_20"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </button> */}
    </div>
  );
};
export default Header;

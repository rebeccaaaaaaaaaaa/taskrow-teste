import React from 'react';

const Logo = () => {
  const svgStyle = {
    fill: '#5c76c5'
  };

  return (
    <div>
      <svg
        width="211"
        height="56"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 211 56"
      >
        <g id="taskrow">
          <path
            id="Path"
            d="M79.32,17.51v4.63h3.89V26H79.32v8.41a2.42,2.42,0,0,0,.58,1.8,2.5,2.5,0,0,0,1.85.58l.79,0,.67,0v3.77l-1.12.15c-.43,0-.89.07-1.36.07a12.85,12.85,0,0,1-2.92-.29,4.92,4.92,0,0,1-2-.9A3.67,3.67,0,0,1,74.72,38a7.23,7.23,0,0,1-.34-2.34V26H71.47V22.14h2.91V17.51Z"
            style={svgStyle}
          ></path>
          {/* ... (outras partes do seu SVG) */}
        </g>
      </svg>
    </div>
  );
};

export default Logo;

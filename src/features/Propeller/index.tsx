import React from "react";

interface IPropeller {
  color: string;
  label: string;
  value: number;
}

export default function Propeller({ color, label, value }: IPropeller) {
  return (
    <div>
      <span>{label}</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210.85 192.37" style={{margin: 10}}>
        <g id="Camada_2" data-name="Camada 2">
          <g id="Camada_1-2" data-name="Camada 1">
            <path
              fill={color}
              className="cls-1"
              d="M136.33,117.51A30.18,30.18,0,0,1,105,146.85c-16.67-.63-30-14.79-29.28-31.11C76.45,99.05,90.61,85.82,107,86.56,123.87,87.32,137,101.12,136.33,117.51ZM106,107.86a9.23,9.23,0,0,0-8.87,8.8,9,9,0,0,0,9.11,8.88,8.41,8.41,0,0,0,8.66-8.7,8.78,8.78,0,0,0-8.9-9"
            />
            <path
              fill={color}
              className="cls-1"
              d="M106,75.59A40.85,40.85,0,0,1,126.26,81c1.18-3.18,2.32-6.32,3.33-9.45,4.59-14.34,8.53-28.71,7.4-44.13C135.34,5,110.07-6.86,92.22,4.21,74.94,14.92,65.68,31.1,62.58,50.67c-2.46,15.5-.1,29.78,10.87,41A41,41,0,0,1,106,75.59Z"
            />
            <path
              fill={color}
              className="cls-1"
              d="M162.77,101a36.4,36.4,0,0,0-18.72.25,41,41,0,0,1-17,50.75c1.82,2.19,3.62,4.34,5.47,6.42C142,169,151.75,179.23,164.41,186.1c10.36,5.62,20.94,7.17,31.63.81,10.4-6.19,15.27-15.54,14.78-27.48C209.74,133.16,188.35,107.26,162.77,101Z"
            />
            <path
              fill={color}
              className="cls-1"
              d="M64.9,117.22c-4.92.89-9.78,1.78-14.56,2.85-12.85,2.89-25.39,6.62-36.57,14-20.44,13.51-17,42.25,2.75,51.5,21.7,10.2,43.13,8.67,63.66-3.13,10.07-5.79,17.54-13.83,20.42-25A41.08,41.08,0,0,1,64.9,117.22Z"
            />
          </g>
        </g>
      </svg>
      <span>{value} kN</span>
    </div>
  );
}

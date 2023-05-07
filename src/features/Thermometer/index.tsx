import React from "react";
import styled from "styled-components";
import "./index.scss";

interface IThermometer {
  value: number;
  min?: number;
  max: number;
}

export default function Thermometer({ value, max, min = 0 }: IThermometer) {
  const adjustedHeight = ((value - min) / (max - min)) * 100 + "%";
  return (
    <div id="wrapper">
      <div id="termometer">
        <div
          id="temperature"
          style={{ height: `${adjustedHeight}` }}
          data-value="288°C"
        ></div>
        <div id="graduations"></div>
      </div>
      <span style={{fontSize: 11, zIndex: 1, marginTop: -27}}>{value?.toFixed(0)}</span>
    </div>
  );
}

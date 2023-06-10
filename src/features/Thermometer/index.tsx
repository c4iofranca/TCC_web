import React from "react";
import styled from "styled-components";
import "./index.scss";
import { colors } from "../../theme/colors";
import { rotate } from "ol/transform";

interface IThermometer {
  value: number;
  min?: number;
  max: number;
}

export default function Thermometer({ value, max, min = 0 }: IThermometer) {
  const adjustedHeight = ((value - min) / (max - min)) * 100 + "%";
  return (
    <div id="wrapper">
      <div
        style={{
          height: 80,
          border: `1px solid ${colors.GREY_SYSTEM}`,
          width: 20,
          transform: "rotate(180deg)",
        }}
      >
        <div
          style={{
            height: adjustedHeight,
            bottom: 0,
            backgroundColor: colors.BLUE_SYSTEM,
          }}
        />
      </div>
      <span style={{ fontSize: 11, zIndex: 1, marginTop: 4 }}>
        {value?.toFixed(0)}ºC
      </span>
    </div>
  );
}

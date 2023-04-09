import React from "react";
import styled from "styled-components";
import Gauge from "../../../features/Charts/Gauge";
import { IConfig } from "../../../types/Gauge";

const gaugeConfig: IConfig = {
  height: 180,
  width: 300,
  center: ["50%", "65%"],
  size: "135%",
  indicators: {
    good: {
      min: 60,
      max: 100,
    },
  },
  yAxisConfig: {
    min: 60,
    max: 100,
  },
  thickness: 18,
  useThemeColor: true,
  pointerRadius: 14
};

export default function RateEvolution() {
  return (
    <Container>
      <div>
        <span>Taxa de rotações do gerador a gás</span>
        <Gauge value={66} config={gaugeConfig} showDataLabels />
      </div>

      <div>
        <span>Taxa de rotações da turbina a gás</span>
        <Gauge value={66} config={gaugeConfig} showDataLabels />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  padding: 12px;
`;

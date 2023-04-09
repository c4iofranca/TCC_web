import React, { useState } from "react";
import LineChart from "../../../features/Charts/Line";
import Gauge from "../../../features/Charts/Gauge";
import styled from "styled-components";
import { IConfig } from "../../../types/Gauge";

const gaugeConfig: IConfig = {
  height: 40,
  width: 150,
  center: ["50%", "85%"],
  size: "245%",
  indicators: {
    good: {
      min: 0.9,
      max: 0.98
    }, 
    bad: {
      min: 0.98,
      max: 1
    }
  },
  yAxisConfig: {
    min: 0.9,
    max: 1
  }
};

export default function PredictionCondition() {
  const [compressorData, setCompressorData] = useState<number[]>([
    0.952, 0.951, 0.964, 0.954, 0.961, 0.971, 0.988, 0.981, 0.973, 0.952, 0.951,
  ]);
  const [turbineData, setTurbineData] = useState<number[]>([
    0.9762, 0.977, 0.982, 0.961, 0.931, 0.988, 0.951, 0.988, 0.973, 0.952, 0.987,
  ]);

  return (
    <Container>
      <h3>Coeficiente do Estado de Degradação</h3>
      <ChartContainer>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>Compressor da Turbina a Gás (GT)</span>
            {/* <Gauge config={gaugeConfig} value={0.951} /> */}
          </div>
          <LineChart data={compressorData} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>Turbina a Gás (GT)</span>
            {/* <Gauge config={gaugeConfig} value={0.987} /> */}
          </div>
          <LineChart data={turbineData} />
        </div>
      </ChartContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  padding: 12px;
`;

const ChartContainer = styled.div`
  display: flex;
  margin-top: 4px;
`;

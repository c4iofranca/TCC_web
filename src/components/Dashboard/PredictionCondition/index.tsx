import React, { useState } from "react";
import LineChart from "../../../features/Charts/Line";
import Gauge from "../../../features/Charts/Gauge";
import styled from "styled-components";
import { IConfig } from "../../../types/Gauge";
import { colors } from "../../../theme/colors";

const gaugeConfig: IConfig = {
  height: 40,
  width: 150,
  center: ["50%", "85%"],
  size: "245%",
  indicators: {
    good: {
      min: 0.9,
      max: 0.98,
    },
    bad: {
      min: 0.98,
      max: 1,
    },
  },
  yAxisConfig: {
    min: 0.9,
    max: 1,
  },
};

export default function PredictionCondition() {
  const [compressorData, setCompressorData] = useState<number[]>([
    0.952, 0.951, 0.964, 0.954, 0.961, 0.971, 0.988, 0.981, 0.973, 0.952, 0.951,
  ]);
  const [turbineData, setTurbineData] = useState<number[]>([
    0.9762, 0.977, 0.982, 0.961, 0.931, 0.988, 0.951, 0.988, 0.973, 0.952,
    0.987,
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
          <div style={{ display: "flex" }}>
            <LineChart data={compressorData} />
            <div
              style={{
                border: "1px solid rgb(230, 230, 230)",
                marginLeft: -11,
                marginBottom: 14,
                marginTop: 9,
                width: 20,
                display: "flex",
                alignItems: "flex-end",
                position: "relative",
                opacity: 0.5,
              }}
            >
              <div
                style={{ height: "22%", background: "#298FE6", width: "100%" }}
              />
              <div
                style={{
                  borderTop: "8px solid transparent",
                  borderBottom: "8px solid transparent",
                  borderLeft: `20px solid yellow`,
                  width: 10,
                  top: "20%",
                  position: "absolute",
                  left: -8,
                }}
              />
            </div>
          </div>
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
          <div style={{ display: "flex" }}>
            <LineChart data={turbineData} />
            <div
              style={{
                border: "1px solid rgb(230, 230, 230)",
                marginLeft: -11,
                marginBottom: 14,
                marginTop: 9,
                width: 20,
                display: "flex",
                alignItems: "flex-end",
                position: "relative",
                opacity: 0.5,
              }}
            >
              <div
                style={{ height: "85%", background: "#298FE6", width: "100%" }}
              />
              <div
                style={{
                  borderTop: "8px solid transparent",
                  borderBottom: "8px solid transparent",
                  borderLeft: `20px solid ${colors.WHITE_SYSTEM}`,
                  width: 10,
                  top: "20%",
                  position: "absolute",
                  left: -8,
                }}
              />
            </div>
          </div>
        </div>
      </ChartContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

const ChartContainer = styled.div`
  display: flex;
  margin-top: 4px;
`;

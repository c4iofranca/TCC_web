import React, { useEffect, useState } from "react";
import LineChart from "../../../features/Charts/Line";
import Gauge from "../../../features/Charts/Gauge";
import styled from "styled-components";
import { IConfig } from "../../../types/Gauge";
import { colors } from "../../../theme/colors";
import { GetPredictOutputResults } from "../../../datasource/predict";

export default function PredictionCondition() {
  const [compressorData, setCompressorData] = useState<number[][]>([]);
  const [turbineData, setTurbineData] = useState<number[][]>([]);

  const getTrends = async () => {
    try {
      const response = await GetPredictOutputResults();

      if (response) {
        const { y1, y2 } = response.data;

        setCompressorData(y1);
        setTurbineData(y2);
      }
    } catch (error) {
      console.log("🚀 ~ file: index.tsx:21 ~ getTrends ~ error:", error);
    }
  };

  useEffect(() => {
    getTrends();
  }, []);

  const currentCompressorDataValue = compressorData?.[0]?.[1];
  const currentTurbineDataValue = turbineData?.[0]?.[1];

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
          <div style={{ display: "flex", flex: 1, width: "100%" }}>
            <LineChart width={360} data={compressorData} />
            {/* <div
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
            </div> */}
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
          <div style={{ display: "flex", flex: 1, width: "100%" }}>
            <LineChart width={360} data={turbineData} />
            {/* <div
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
                style={{ height: "82%", background: "#298FE6", width: "100%" }}
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
            </div> */}
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
  width: 100%;
`;

const ChartContainer = styled.div`
  display: flex;
  margin-top: 4px;
`;

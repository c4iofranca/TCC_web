import React, { useEffect, useState } from "react";
import { ChartProperties } from "../../../constants/chart";
import { GetLatestValuesBetweenTimestamp } from "../../../datasource/dataset";
import { GetPredictOutputResults } from "../../../datasource/predict";
import { Card } from "../../../features/Card";
import LineChart from "../../../features/Charts/Line";
import { colors } from "../../../theme/colors";
import setChartOptions from "../../../utils/chartBuilder";
import predictStatusY1 from "../../../utils/setPredictStatus";
import { Container, MiddleBottom, MiddleMiddle, MiddleTop } from "./styles";

interface IMiddleContentData {
  T_inj_control: number[][];
  HP_T_exit_temp: number[][];
  GG_rpm: number[][];
}

export default function MiddleContent() {
  const [tagsValues, setTagValues] = useState<IMiddleContentData>();
  const [predictOutputs, setPredictOutputs] = useState<number[][]>([]);

  const getValues = async () => {
    try {
      const response = await GetLatestValuesBetweenTimestamp([
        "T_inj_control",
        "HP_T_exit_temp",
        "GG_rpm",
      ]);

      if (response) {
        setTagValues(response.data);
      }
    } catch (error) {
      console.log("🚀 ~ file: index.tsx:12 ~ getValues ~ error:", error);
    }
  };

  const getPredictOutputValues = async () => {
    try {
      const response = await GetPredictOutputResults();

      if (response) {
        setPredictOutputs(response.data);
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: index.tsx:36 ~ getPredictOutputValues ~ error:",
        error
      );
    }
  };

  const currentPredictOutputStatus = predictStatusY1(
    predictOutputs?.[0]?.[1] || 0
  );

  useEffect(() => {
    getValues();
    getPredictOutputValues();
  }, []);

  const { chart, yAxisConfig } = setChartOptions(ChartProperties.y1Model, [
    tagsValues?.HP_T_exit_temp,
    tagsValues?.GG_rpm,
    tagsValues?.T_inj_control,
    predictOutputs,
  ]);

  return (
    <Container>
      <LineChart
        data={chart}
        title="Temperatura do ar de entrada do compressor GT"
        status={colors[currentPredictOutputStatus || "transparent"]}
        yAxisConfig={yAxisConfig}
      />

      {/* <MiddleMiddle>
        <Card>Pressão de ar de entrada do compressor GT</Card>
        <Card>Pressão de ar de saída do compressor GT</Card>
      </MiddleMiddle> */}
    </Container>
  );
}

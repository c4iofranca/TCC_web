import React, { useEffect, useState } from "react";
import { GetLatestValuesBetweenTimestamp } from "../../../datasource/dataset";
import { Card } from "../../../features/Card";
import LineChart from "../../../features/Charts/Line";
import { Container, MiddleBottom, MiddleMiddle, MiddleTop } from "./styles";

interface IMiddleContentData {
  tic: number[][];
  t48: number[][];
  ggn: number[][];
}

export default function MiddleContent() {
  const [tagsValues, setTagValues] = useState<IMiddleContentData>();

  const getValues = async () => {
    try {
      const response = await GetLatestValuesBetweenTimestamp([
        "tic",
        "t48",
        "ggn",
      ]);

      if (response) {
        setTagValues(response.data);
      }
    } catch (error) {
      console.log("🚀 ~ file: index.tsx:12 ~ getValues ~ error:", error);
    }
  };

  useEffect(() => {
    getValues();
  }, []);

  const data = [
    {
      name: "Temperatura de saída da turbina HP",
      type: "line",
      yAxis: 1,
      data: tagsValues?.t48,
      // tooltip: {
      //   valueSuffix: " mm",
      // },
    },
    {
      name: "Taxa de revoluções do gerador de gás",
      type: "line",
      yAxis: 2,
      data: tagsValues?.ggn,
      marker: {
        enabled: false,
      },
      // tooltip: {
      //   valueSuffix: " mb",
      // },
    },
    {
      name: "Controle de injeção de turbina",
      type: "line",
      data: tagsValues?.tic,
      // tooltip: {
      //   valueSuffix: " °C",
      // },
    },
  ];

  return (
    <Container>
      <LineChart
        data={data}
        title="Temperatura do ar de entrada do compressor GT"
      />

      {/* <MiddleMiddle>
        <Card>Pressão de ar de entrada do compressor GT</Card>
        <Card>Pressão de ar de saída do compressor GT</Card>
      </MiddleMiddle> */}
    </Container>
  );
}

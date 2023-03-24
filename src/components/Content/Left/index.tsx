import React, { useEffect, useState } from "react";
import { GetLatestValuesByTimestamp } from "../../../datasource/dataset";
import { Card } from "../../../features/Card";
import Gauge from "../../../features/Charts/Gauge";
import { colors } from "../../../theme/colors";
import { Container } from "./styles";

interface ILeftContentData {
  gtt: number;
  ts: number;
  tp: number;
}

export default function LeftContent() {
  const [tagsValues, setTagsValues] = useState<ILeftContentData>();

  const getValues = async () => {
    try {
      const response = await GetLatestValuesByTimestamp(["gtt", "ts", "tp"]);

      if (response) {
        setTagsValues(response.data[0]);
      }
    } catch (error) {
      console.log("🚀 ~ file: index.tsx:12 ~ getValues ~ error:", error);
    }
  };

  useEffect(() => {
    getValues();
  }, []);

  return (
    <Container>
      <Card>
        <Gauge
          title="Torque do Eixo da Turbina a Gás"
          value={tagsValues?.gtt as number}
          seriesName="Torque"
          tickInterval={15000}
          tickAmount={2500}
        />
      </Card>
      <Card>
        <Gauge
          title="Torque da Hélice de Estibordo"
          value={tagsValues?.ts as number}
          seriesName="Torque"
          tickInterval={95}
          tickAmount={20}
        />
      </Card>
      <Card>
        <Gauge
          title="Torque da Hélice de Bombordo"
          value={tagsValues?.tp as number}
          seriesName="Torque"
          tickInterval={95}
          tickAmount={20}
        />
      </Card>
    </Container>
  );
}

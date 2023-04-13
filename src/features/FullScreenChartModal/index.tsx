import React from "react";
import LineChart from "../Charts/Line";

interface IFullScreenChartModal {
  data: number[][];
  title?: string;
}

export default function FullScreenChartModal({ data, title }: IFullScreenChartModal) {
  return <LineChart data={data} height={600} width={1500} title={title} showXAxis />;
}

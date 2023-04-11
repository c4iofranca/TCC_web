import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { colors } from "../../../theme/colors";

interface ILineChartOptions {
  data: number[];
}

Highcharts.setOptions({
  colors: colors.colors,
});

export default function LineChart({ data }: ILineChartOptions) {
  const options: Highcharts.Options = {
    chart: {
      backgroundColor: colors.TRANSPARENT,
      plotBackgroundColor: colors.TRANSPARENT,
      plotBackgroundImage: colors.TRANSPARENT,
      plotBorderWidth: 0,
      plotShadow: false,
      height: 300,
      width: 370
    },
    title: {
      text: "",
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      visible: false,
    },
    yAxis: {
      title: {
        text: "",
      },
      labels: {
        style: {
          color: colors.WHITE,
        },
      },
      gridLineWidth: 0.5,
    },
    series: [
      {
        name: "Compressor da Turbina a Gás (GT)",
        data: data,
        type: "line",
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

import React, { useEffect, useState } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { colors } from "../../../theme/colors";

interface ILineChartOptions {
  data: number[][];
  height?: number;
  width?: number | string;
  title?: string;
  showXAxis?: boolean;
  thresholdValue?: number;
  tickAmount: number;
}

Highcharts.setOptions({
  colors: colors.colors,
});

export default function LineChart({ data, height, width, showXAxis, title, thresholdValue, tickAmount }: ILineChartOptions) {
  const options: Highcharts.Options = {
    chart: {
      backgroundColor: colors.TRANSPARENT,
      plotBackgroundColor: colors.TRANSPARENT,
      plotBackgroundImage: colors.TRANSPARENT,
      plotBorderWidth: 0,
      plotShadow: false,
      height: height || 300,
      width: width || 370
    },
    title: {
      text: title || "",
      style: {
        color: colors.WHITE
      }
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      type: "datetime",
      visible: Boolean(showXAxis) || false,
      labels: {
        style: {
          color: colors.WHITE
        }
      }
    },
    yAxis: {
      title: {
        text: "",
      },
      tickAmount,
      labels: {
        style: {
          color: colors.WHITE,
        },
      },
      gridLineWidth: 0.5,
      plotLines: thresholdValue ? [{
        color: '#fff', width: 2, value: thresholdValue, dashStyle: 'Dash'
      }] : []
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

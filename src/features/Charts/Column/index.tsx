import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { colors } from "../../../theme/colors";

Highcharts.setOptions({
  colors: colors.colors,
});

export default function Column() {
  const options: Highcharts.Options = {
    chart: {
      type: "column",
      backgroundColor: colors.TRANSPARENT,
      plotBackgroundColor: colors.TRANSPARENT,
      plotBackgroundImage: colors.TRANSPARENT,
      plotBorderWidth: 0,
      plotShadow: false,
      width: 500
    },
    title: {
      text: "",
    },
    xAxis: {
      visible: false,
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Consumo Manual",
      },
      gridLineWidth: 0.5,
      labels: {
        style: {
            color: colors.WHITE
        }
      }
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Tokyo",
        data: [
          49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
          95.6, 54.4,
        ],
        type: "column",
      },
    ],
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { colors } from "../../../theme/colors";
import { DataColumn } from "../../../types/TotalFuelFlow";

interface IColumnChart {
  data: DataColumn[];
}

Highcharts.setOptions({
  colors: colors.colors,
});

export default function Column({ data }: IColumnChart) {
  const options: Highcharts.Options = {
    chart: {
      type: "column",
      backgroundColor: colors.TRANSPARENT,
      plotBackgroundColor: colors.TRANSPARENT,
      plotBackgroundImage: colors.TRANSPARENT,
      plotBorderWidth: 0,
      plotShadow: false,
      height: (9 / 16) * 100 + "%",
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
        text: "",
      },
      gridLineWidth: 0.5,
      labels: {
        style: {
          color: colors.WHITE,
        },
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Consumo de Combustível",
        data: data?.map((d) => {
          return Math.round(d.intervalSum);
        }),
        type: "column",
      },
    ],
    tooltip: {
      formatter: function () {
        const column = data[this.x as number];
        return `
        Timestamp: ${new Date(
          column.initialDate
        ).toLocaleString()} - ${new Date(
          column.finalDate
        ).toLocaleString()} </br>
        ${this.series.name}: <b>${this.y}</b> T`;
      },
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

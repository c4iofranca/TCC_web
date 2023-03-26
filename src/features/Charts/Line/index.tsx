import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { colors } from "../../../theme/colors";

interface ILineChartOptions {
  title: string;
  data: any;
}

Highcharts.setOptions({
    colors: colors.colors
})

export default function LineChart({ data, title }: ILineChartOptions) {
  const options: Highcharts.Options = {
    chart: {
      backgroundColor: colors.chartBackground,
      plotBackgroundColor: colors.chartBackground,
      plotBackgroundImage: colors.chartBackground,
      plotBorderWidth: 0,
      plotShadow: false,
      height: "40%",
    },
    title: {
      text: title,
      style: {
        fontSize: "12px",
        color: "white",
      },
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      type: "datetime",
      labels: {
        style: {
            color: 'white'
        }
      }
    },
    yAxis: [
      {
        labels: {
          format: "{value}°C",
          style: {
            color: colors.colors[0],
            fontSize: '10px'
          },
        },
        title: {
          text: "Temperatura de saída da turbina HP",
          style: {
            color: colors.colors[0],
            fontSize: '10px'
          },
        },
        opposite: true,
      },
      {
        gridLineWidth: 0,
        title: {
            text: 'Taxa de revoluções do gerador de gás',
            style: {
                color: colors.colors[1],
                fontSize: '10px'
            }
        },
        labels: {
            format: '{value} rpm',
            style: {
                color: colors.colors[1],
                fontSize: '10px'
            }
        }
      },
      {
        // Tertiary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Controle de injeção de turbina',
            style: {
                color: colors.colors[2],
                fontSize: '10px'
            }
        },
        labels: {
            format: '{value} mb',
            style: {
                color: colors.colors[2],
                fontSize: '10px'
            }
        },
        opposite: true,
      },
    ],
    series: data,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

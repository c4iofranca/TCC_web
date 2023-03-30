import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { colors } from "../../../theme/colors";

interface ILineChartOptions {
  title: string;
  data: any;
  status: string;
  yAxisConfig: Highcharts.YAxisOptions | Highcharts.YAxisOptions[] | undefined;
}

Highcharts.setOptions({
    colors: colors.colors
})

export default function LineChart({ data, title, status, yAxisConfig }: ILineChartOptions) {
  const options: Highcharts.Options = {
    chart: {
      backgroundColor: colors.chartBackground,
      plotBackgroundColor: colors.chartBackground,
      plotBackgroundImage: colors.chartBackground,
      plotBorderWidth: 0,
      plotShadow: false,
      height: "40%",
      borderWidth: 5,
      borderRadius: 6,
      borderColor: status
    },
    title: {
      text: title,
      style: {
        fontSize: "12px",
        color: colors.white,
      },
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      type: "datetime",
      labels: {
        style: {
            color: colors.white
        }
      }
    },
    yAxis: yAxisConfig,
    series: data,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

import React, { useEffect, useState } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { colors } from "../../../theme/colors";

interface ILineChartOptions {
  data: number[][];
  height?: number;
  width?: number | string;
}

Highcharts.setOptions({
  colors: colors.colors,
});

export default function LineChart({ data, height, width }: ILineChartOptions) {
  // const [json, setJson] = useState<any>(null);

  // useEffect(() => {
  //   fetch(
  //     "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/large-dataset.json"
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setJson(res);
  //     });
  // }, []);

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
      text: "",
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      type: "datetime",
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

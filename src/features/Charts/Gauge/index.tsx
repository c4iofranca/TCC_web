import React, { useRef } from "react";
import HighchartsMore from 'highcharts/highcharts-more'
import SolidGauge from 'highcharts/modules/solid-gauge'
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { colors } from "../../../theme/colors";

HighchartsMore(Highcharts);
SolidGauge(Highcharts);

interface IGaugeOptions {
  title: string;
  value: number;
  seriesName: string;
  tickInterval?: number;
  tickAmount?: number;
}

export default function Gauge({ title, value, seriesName, tickAmount, tickInterval }: IGaugeOptions) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const options: Highcharts.Options = {
    chart: {
      backgroundColor: colors.chartBackground,
      type: "gauge",
      plotBackgroundColor: colors.chartBackground,
      plotBackgroundImage: colors.chartBackground,
      plotBorderWidth: 0,
      plotShadow: false,
      height: "100%",
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

    pane: {
      startAngle: -150,
      endAngle: 150,
      background: [],
      center: ["50%", "50%"],
      size: "85%",
    },

    yAxis: {
      min: 0,
      max: value*1.035,
      tickPosition: "outside",
      minorTickInterval: tickAmount,
      tickInterval: tickInterval,
      tickLength: 5,
      tickWidth: 2,
      labels: {
        distance: 15,
        style: {
          fontSize: "11px",
          color: "white",
        },
      },
      plotBands: [
        {
          from: 0,
          to: value*0.75,
          color: colors.regularValue,
          thickness: 15,
        },
        {
          from: value*0.75,
          to: value*0.95,
          color: colors.mediumValue,
          thickness: 15,
        },
        {
          from: value*0.95,
          to: value*1.1,
          color: colors.criticalValue,
          thickness: 15,
        },
      ],
    },

    series: [
      {
        name: seriesName,
        data: [value],
        type: 'gauge',
        dataLabels: {
          format: "rpm",
          padding: -5,
          color: "white",
          style: {
            fontSize: "10px",
            
          },
        },
        dial: {
          radius: "70%",
          backgroundColor: colors.pointer,
          baseWidth: 9,
          baseLength: "0%",
          rearLength: "0%",
        },
        pivot: {
          backgroundColor: colors.pointer,
          radius: 5,
        },
      },
    ],
  };

  return (
    <div style={{ borderRadius: 10, padding: 2 }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
      />
    </div>
  );
}

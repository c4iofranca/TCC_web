import React, { useRef } from "react";
import HighchartsMore from 'highcharts/highcharts-more'
import SolidGauge from 'highcharts/modules/solid-gauge'
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { colors } from "../../../theme/colors";
import { IGaugeOptions } from "../../../types/Gauge";

HighchartsMore(Highcharts);
SolidGauge(Highcharts);

export default function Gauge({ config, value, title, showDataLabels }: IGaugeOptions) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const options: Highcharts.Options = {
    chart: {
      backgroundColor: colors.TRANSPARENT,
      type: "gauge",
      plotBackgroundColor: colors.TRANSPARENT,
      plotBackgroundImage: colors.TRANSPARENT,
      plotBorderWidth: 0,
      plotShadow: false,
      height: config?.height,
      width: config?.width
    },

    title: {
      text: title || "",
      style: {
        fontSize: "12px",
        color: "white",
      },
    },

    credits: {
      enabled: false,
    },

    pane: {
      startAngle: -130,
      endAngle: 130,
      background: [],
      center: config?.center || ['50%', '85%'],
      size: config?.size,
    },

    yAxis: {
      min: config?.yAxisConfig?.min,
      max: config?.yAxisConfig?.max,
      lineWidth: 0,
      minorTickInterval: null,
      tickPixelInterval: 400,
      tickLength: 3,
      tickWidth: 0,
      labels: {
        enabled: false
      },
      plotBands: [
        {
          from: config?.indicators?.good?.min,
          to: config?.indicators?.good?.max,
          color: config?.useThemeColor ? colors.WHITE_SYSTEM : colors.regularValue,
          thickness: config?.thickness || 6,
        },
        {
          from: config?.indicators?.bad?.min,
          to: config?.indicators?.bad?.max,
          color: config?.useThemeColor ? colors.WHITE_SYSTEM : colors.mediumValue,
          thickness: config?.thickness || 6,
        },
      ],
    },

    series: [
      {
        name: "",
        data: [value],
        type: 'gauge',
        dataLabels: showDataLabels ? {
          format: "rpm",
          padding: -5
        } : {
          enabled: false
        },
        dial: {
          radius: "70%",
          backgroundColor: colors.pointer,
          baseWidth: config?.pointerRadius || 5,
          baseLength: "20%",
          rearLength: "0%",
        },
        pivot: {
          backgroundColor: colors.pointer,
          radius: (config?.pointerRadius as number) - 5 || 3,
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

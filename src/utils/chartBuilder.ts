import { colors } from "../theme/colors";
import IModelParams from "../types/ChartBuilder";

export default function setChartOptions(labels: IModelParams[], data: any) {
  const chart = labels?.map((label, index) => {
    return {
      name: label.name,
      type: "line",
      yAxis: index,
      data: data[index],
    };
  });

  const yAxisConfig = labels?.map((label, index) => {
    return {
      labels: {
        format: `{value}${label.unit}`,
        style: {
          color: colors.colors[index],
          fontSize: "10px",
        },
      },
      title: {
        text: label.name,
        style: {
            color: colors.colors[index],
            fontSize: '10px'
        }
      },
      gridLineWidth: 0,
      opposite: index % 2 === 0
    };
  });

  return { chart, yAxisConfig };
}

interface IMinMaxValues {
  min: number;
  max: number;
}

interface IConfig {
  height: number | string;
  width: number;
  center: string[];
  size: string;
  indicators: {
    good?: IMinMaxValues;
    bad?: IMinMaxValues;
  };
  yAxisConfig: IMinMaxValues;
  thickness?: number;
  useThemeColor?: boolean;
  pointerRadius?: number;
  unit?: string;
}

interface IGaugeOptions {
  config?: IConfig;
  value: number;
  title?: string;
  showDataLabels?: boolean;
}

export type { IGaugeOptions, IMinMaxValues, IConfig };

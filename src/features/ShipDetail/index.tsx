import React from "react";
import Gauge from "../Charts/Gauge";
import Column from "../Charts/Column";
import { IConfig } from "../../types/Gauge";
import { colors } from "../../theme/colors";
import Thermometer from "../Thermometer";

// RPM Gerador
const gaugeConfig: IConfig = {
  height: 120,
  width: 150,
  center: ["50%", "65%"],
  size: "65%",
  indicators: {
    good: {
      min: 60,
      max: 100,
    },
  },
  yAxisConfig: {
    min: 60,
    max: 100,
  },
  thickness: 10,
  useThemeColor: true,
  pointerRadius: 10,
};

export default function ShipDetail() {
  return (
    <svg
      width="1003"
      height="335"
      viewBox="0 0 1003 335"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="530.25"
        y1="219"
        x2="530.25"
        y2="116"
        stroke="#263853"
        stroke-width="1.5"
        stroke-dasharray="6 6"
      />
      <path
        d="M502.36 130.153V77.0532M502.36 204.975V258.075"
        stroke="#263853"
        stroke-width="1.5"
      />
      <path d="M183.142 86.4814V152.479" stroke="#263853" stroke-width="1.5" />
      <path d="M183.142 183V248.997" stroke="#263853" stroke-width="1.5" />
      <path
        d="M918.043 97.0005L918.043 27.0007M916.822 307.5L916.822 238.5"
        stroke="#263853"
        stroke-width="1.5"
      />
      <path
        d="M848 152.5L848 38.5M848 296.5L848 182.5"
        stroke="#263853"
        stroke-width="1.5"
      />
      <path
        d="M13.0301 185.5C13.0301 185.5 1 182.5 1 167.564C1 151 13.0301 148 13.0301 148V22.4275H23.5451V48.8265L182.482 86.4818L448.678 92.7672L474.689 77.0535H502.913L536.119 65.1111H628.5L674.773 41.6837H827L988.906 16.0853V1.62866H1001.63V167.564V333.5H988.906V319.043L827 293H674.773L628.5 270.018H536.119L502.913 258.075H474.689L448.678 242.361L182.482 248.647L23.5451 286.302V312.701H13.0301V185.5Z"
        stroke="#263853"
        stroke-width="1.5"
      />
      <path
        d="M682.841 281.274H798.507L798.507 182.649H848.978L864.473 238.104H976.818V167.564V97.024H864.473L848.978 152.479H798.507L798.507 53.8547H682.841V151.851H654.063V167.564V183.278H682.841V281.274Z"
        stroke="#394C68"
        stroke-width="1.5"
      />
      <path
        d="M611.897 152.479V77.0532H530.584V114.766L461.407 152.479H416.026V103.452H202.172V152.479H131.567V167.564V182.649H184.142H202.172V231.676H416.026V182.649H461.407L502.36 204.975L530.584 220.362V258.075H611.897V182.649M611.343 151.851H637.908V167.564V183.278H611.343"
        stroke="#394C68"
        stroke-width="1.5"
      />

      <text x={40} y={125} fontSize={12} fill={colors.WHITE_SYSTEM}>RPM Gerador</text>
      <foreignObject className="node" x={0} y={95} width={150} height={120}>
        <Gauge
          value={66}
          config={{ ...gaugeConfig, unit: "rpm" }}
          showDataLabels
        />
      </foreignObject>

      <foreignObject x={220} y={115} width={40} height={120}>
        <Thermometer max={327} value={288} />
      </foreignObject>
      <text x={220} y={225} fontSize={12} fill={colors.WHITE_SYSTEM}>Entrada</text>

      <text x={270} y={125} fontSize={12} fill={colors.WHITE_SYSTEM}>Compressor GT</text>
      <text x={280} y={165} fontSize={12} fill={colors.WHITE_SYSTEM}>Temperatura</text>

      <foreignObject x={360} y={115} width={40} height={120}>
        <Thermometer max={327} value={288} />
      </foreignObject>
      <text x={360} y={225} fontSize={12} fill={colors.WHITE_SYSTEM}>Saída</text>

      <text x={542} y={100} fontSize={12} fill={colors.WHITE_SYSTEM}>Turbina AP</text>
      <foreignObject x={555} y={115} width={40} height={120}>
        <Thermometer max={327} value={288} />
      </foreignObject>
      <text x={560} y={225} fontSize={12} fill={colors.WHITE_SYSTEM}>Saída</text>

      <text x={700} y={125} fontSize={12} fill={colors.WHITE_SYSTEM}>Torque Turbina</text>
      <foreignObject className="node" x={665} y={95} width={150} height={120}>
        <Gauge
          value={66}
          config={{ ...gaugeConfig, unit: "kN m" }}
          showDataLabels
        />
      </foreignObject>

      <text x={880} y={125} fontSize={12} fill={colors.WHITE_SYSTEM}>RPM Turbina</text>
      <foreignObject className="node" x={840} y={95} width={150} height={120}>
        <Gauge
          value={66}
          config={{ ...gaugeConfig, unit: "kN m" }}
          showDataLabels
        />
      </foreignObject>

      <rect height={100} width={2} fill={colors.BLACK} opacity={0.1} />

      
    </svg>
  );
}

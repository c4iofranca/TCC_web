import React, { SetStateAction, useState } from "react";
import Gauge from "../Charts/Gauge";
import Column from "../Charts/Column";
import { IConfig } from "../../types/Gauge";
import { colors } from "../../theme/colors";
import Thermometer from "../Thermometer";
import { ILimits } from "../../types/Limits";
import { ICurrentValues } from "../../types/CurrentValues";
import { ITrends, TrendsNames } from "../../types/Trends";
import LineChart from "../Charts/Line";
import Thick from "../Thick";
import ExpandButton from "../../assets/icons/Expand";

interface IShipDetail {
  limits: ILimits | null;
  currentValues: ICurrentValues | null;
  trends: ITrends | null;
  handleOpenFullScreenModal: () => void;
  handleDataFullScreen: (tag: TrendsNames) => void;
}

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
  thickness: 10,
  useThemeColor: true,
  pointerRadius: 10,
};

export default function ShipDetail({
  currentValues,
  limits,
  trends,
  handleDataFullScreen,
  handleOpenFullScreenModal,
}: IShipDetail) {
  const [selectedTrend, setSelectedTrend] = useState<TrendsNames>();
  return (
    <svg
      width="1050"
      height="100%"
      viewBox="0 0 1003 335"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ top: -40, position: "relative" }}
    >
      <line
        x1="530.25"
        y1="219"
        x2="530.25"
        y2="116"
        stroke="#263853"
        strokeWidth="2.5"
        strokeDasharray="6 6"
      />
      <path
        d="M502.36 130.153V77.0532M502.36 204.975V258.075"
        stroke="#263853"
        strokeWidth="2.5"
      />
      <path d="M183.142 86.4814V152.479" stroke="#263853" strokeWidth="2.5" />
      <path d="M183.142 183V248.997" stroke="#263853" strokeWidth="2.5" />
      <path
        d="M918.043 97.0005L918.043 27.0007M916.822 307.5L916.822 238.5"
        stroke="#263853"
        strokeWidth="2.5"
      />
      <path
        d="M848 152.5L848 38.5M848 296.5L848 182.5"
        stroke="#263853"
        strokeWidth="2.5"
      />
      <path
        d="M13.0301 185.5C13.0301 185.5 1 182.5 1 167.564C1 151 13.0301 148 13.0301 148V22.4275H23.5451V48.8265L182.482 86.4818L448.678 92.7672L474.689 77.0535H502.913L536.119 65.1111H628.5L674.773 41.6837H827L988.906 16.0853V1.62866H1001.63V167.564V333.5H988.906V319.043L827 293H674.773L628.5 270.018H536.119L502.913 258.075H474.689L448.678 242.361L182.482 248.647L23.5451 286.302V312.701H13.0301V185.5Z"
        stroke="#263853"
        strokeWidth="3"
      />
      <path
        d="M682.841 281.274H798.507L798.507 182.649H848.978L864.473 238.104H976.818V167.564V97.024H864.473L848.978 152.479H798.507L798.507 53.8547H682.841V151.851H654.063V167.564V183.278H682.841V281.274Z"
        stroke="#394C68"
        strokeWidth="2.5"
      />
      <path
        d="M611.897 152.479V77.0532H530.584V114.766L461.407 152.479H416.026V103.452H202.172V152.479H134.567V167.564V182.649H184.142H202.172V231.676H416.026V182.649H461.407L502.36 204.975L530.584 220.362V258.075H611.897V182.649M611.343 151.851H637.908V167.564V183.278H611.343"
        stroke="#394C68"
        strokeWidth="2.5"
      />

      <text x={40} y={125} fontSize={12} fill={colors.WHITE_SYSTEM}>
        RPM Gerador
      </text>
      <foreignObject className="node" x={0} y={95} width={150} height={120}>
        <Gauge
          value={Number(currentValues?.GG_rpm.toFixed(0)) as number}
          config={{
            ...gaugeConfig,
            unit: "rpm",
            yAxisMax: (limits?.gauges?.max_gg_rpm as number) * 1.2,
          }}
          showDataLabels
        />
      </foreignObject>

      <foreignObject x={220} y={115} width={40} height={120}>
        <Thermometer
          max={(limits?.thermometers?.max_in_temp as number) * 1.2}
          value={currentValues?.GT_C_airIn_temp as number}
        />
      </foreignObject>
      <text x={220} y={225} fontSize={12} fill={colors.WHITE_SYSTEM}>
        Entrada
      </text>

      <text x={265} y={15} fontSize={18.72} fontWeight={"bold"} fill={colors.WHITE_SYSTEM}>
        Turbina a Gás (Gerador de Gás e Turbina de Potência)
      </text>

      <foreignObject x={360} y={115} width={40} height={120}>
        <Thermometer
          max={(limits?.thermometers?.max_out_temp as number) * 1.2}
          value={currentValues?.GT_C_airOut_temp as number}
        />
      </foreignObject>
      <text x={365} y={225} fontSize={12} fill={colors.WHITE_SYSTEM}>
        Saída
      </text>

      <text x={270} y={120} fontSize={12} fill={colors.WHITE_SYSTEM}>
        Compressor GT
      </text>
      <text x={278} y={160} fontSize={12} fill={colors.WHITE_SYSTEM}>
        Temperatura
      </text>

      <text x={542} y={100} fontSize={12} fill={colors.WHITE_SYSTEM}>
        Turbina AP
      </text>
      <foreignObject x={555} y={115} width={40} height={120}>
        <Thermometer
          max={(limits?.thermometers?.max_turbine_out_temp as number) * 1.2}
          value={currentValues?.HP_T_exit_temp as number}
        />
      </foreignObject>
      <text x={560} y={225} fontSize={12} fill={colors.WHITE_SYSTEM}>
        Saída
      </text>

      <text x={690} y={125} fontSize={12} fill={colors.WHITE_SYSTEM}>
        Torque Turbina BP
      </text>
      <foreignObject className="node" x={665} y={95} width={150} height={120}>
        <Gauge
          value={Number(currentValues?.GT_shaft_torque.toFixed(0)) as number}
          config={{
            ...gaugeConfig,
            unit: "kN m",
            yAxisMax: (limits?.gauges?.max_gt_shaft_torque as number) * 1.2,
          }}
          showDataLabels
        />
      </foreignObject>

      <text x={873} y={125} fontSize={12} fill={colors.WHITE_SYSTEM}>
        RPM Turbina BP
      </text>
      <foreignObject className="node" x={840} y={95} width={150} height={120}>
        <Gauge
          value={Number(currentValues?.GT_rpm.toFixed(0)) as number}
          config={{
            ...gaugeConfig,
            unit: "kN m",
            yAxisMax: (limits?.gauges?.max_gt_rpm as number) * 1.2,
          }}
          showDataLabels
        />
      </foreignObject>

      <text x={50} y={310} fill={colors.WHITE_SYSTEM} fontSize={12}>
        Pressão de Entrada
      </text>
      <foreignObject x={145} y={295} width={45} height={45}>
        <ExpandButton
          handleClick={handleOpenFullScreenModal}
          tag="GT_C_airIn_pressure"
          handleDataFullScreen={handleDataFullScreen}
        />
      </foreignObject>
      <foreignObject x={-10} y={310} width={220} height={80}>
        <div>
          <LineChart
            tickAmount={3}
            data={trends?.main?.GT_C_airIn_pressure as number[][]}
            height={80}
            width={220}
          />
        </div>
      </foreignObject>

      <text x={210} y={310} fill={colors.WHITE_SYSTEM} fontSize={12}>
        Pressão de Saída do Compressor
      </text>
      <foreignObject x={380} y={295} width={45} height={45}>
        <ExpandButton
          handleClick={handleOpenFullScreenModal}
          tag="GT_C_airOut_pressure"
          handleDataFullScreen={handleDataFullScreen}
        />
      </foreignObject>
      <foreignObject x={200} y={310} width={220} height={80}>
        <div>
          <LineChart
            tickAmount={3}
            data={trends?.main?.GT_C_airOut_pressure as number[][]}
            height={80}
            width={220}
          />
        </div>
      </foreignObject>
      <line
        stroke="#263853"
        opacity={0.5}
        strokeWidth={2}
        x1={440}
        x2={440}
        y1={"100%"}
        y2={30}
        strokeDasharray={4}
      />

      <text x={445} y={310} fill={colors.WHITE_SYSTEM} fontSize={12}>
        Pressão de Saída da Turbina AP
      </text>
      <foreignObject x={615} y={295} width={45} height={45}>
        <ExpandButton
          handleClick={handleOpenFullScreenModal}
          tag="HP_T_exit_pressure"
          handleDataFullScreen={handleDataFullScreen}
        />
      </foreignObject>
      <foreignObject x={433} y={310} width={220} height={80}>
        <div>
          <LineChart
            tickAmount={3}
            data={trends?.main?.HP_T_exit_pressure as number[][]}
            height={80}
            width={220}
          />
        </div>
      </foreignObject>
      <line
        stroke="#263853"
        opacity={0.5}
        strokeWidth={2}
        x1={646}
        x2={646}
        y1={"100%"}
        y2={30}
        strokeDasharray={4}
      />

      <text x={705} y={310} fill={colors.WHITE_SYSTEM} fontSize={12}>
        Pressão de Exaustão
      </text>
      <foreignObject x={810} y={295} width={45} height={45}>
        <ExpandButton
          handleClick={handleOpenFullScreenModal}
          tag="GT_exhGas_pressure"
          handleDataFullScreen={handleDataFullScreen}
        />
      </foreignObject>
      <foreignObject x={650} y={310} width={220} height={80}>
        <div>
          <LineChart
            tickAmount={3}
            data={trends?.main?.GT_exhGas_pressure as number[][]}
            height={80}
            width={220}
          />
        </div>
      </foreignObject>

      {/* <foreignObject x={0} y={-20} width={140} height={28}>
        <Thick label="Gerador de Gás" />
      </foreignObject>
      <foreignObject x={646} y={-20} width={170} height={28}>
        <Thick label="Turbina de Potência" />
      </foreignObject> */}
    </svg>
  );
}

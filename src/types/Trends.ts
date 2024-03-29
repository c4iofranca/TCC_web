interface ITrends {
  main: {
    GT_C_airIn_pressure: number[][];
    GT_C_airOut_pressure: number[][];
    GT_exhGas_pressure: number[][];
    HP_T_exit_pressure: number[][];
  };
  temporal: {
    GT_C_airIn_pressure: number[][];
    GT_C_airOut_pressure: number[][];
    GT_exhGas_pressure: number[][];
    HP_T_exit_pressure: number[][];
  };
}

type TrendsNames = "GT_C_airIn_pressure" | "GT_C_airOut_pressure" | "GT_exhGas_pressure" | "HP_T_exit_pressure"

export type { ITrends, TrendsNames  };

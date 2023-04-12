interface ICurrentValues {
  timestamp: number;
  lever_position: number;
  ship_speed: number;
  GT_shaft_torque: number;
  GT_rpm: number;
  GG_rpm: number;
  S_prplr_torque: number;
  P_prplr_torque: number;
  HP_T_exit_temp: number;
  GT_C_airIn_temp: number;
  GT_C_airOut_temp: number;
  HP_T_exit_pressure: number;
  GT_C_airIn_pressure: number;
  GT_C_airOut_pressure: number;
  GT_exhGas_pressure: number;
  T_inj_control: number;
  fuel_flow: number;
  GT_C_decay_coef: number;
  GT_T_decay_coef: number;
}

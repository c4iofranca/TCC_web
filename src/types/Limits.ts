interface ILimits {
  gauges: {
    max_inj_control: number;
    max_fuel_flow: number;
    max_gt_shaft_torque: number;
    max_gt_rpm: number;
    max_gg_rpm: number;
  };
  thermometers: {
    max_in_temp: number;
    max_out_temp: number;
    max_turbine_out_temp: number;
  };
  manete: {
    lever_position: number;
  };
}

export type { ILimits }
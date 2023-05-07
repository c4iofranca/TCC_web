import { API } from "./baseAPI";

import * as Endpoints from "../constants/Endpoints";

export const GetAlerts = async () => {
  try {
    const data = await API(Endpoints.API_ENDPOINT).get(Endpoints.GET_ALERTS);

    return data;
  } catch (error) {
    console.log("🚀 ~ file: alerts.ts:9 ~ GetAlerts ~ error:", error);
  }
};

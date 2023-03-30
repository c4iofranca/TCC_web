import { API } from "./baseAPI";

import * as Endpoints from "../constants/Endpoints";
import { GLOBAL_END_DATE, GLOBAL_START_DATE } from "../constants/Global";

export const GetPredictOutputResults = async () => {
  const body = {
    startDate: GLOBAL_START_DATE,
    endDate: GLOBAL_END_DATE,
  };

  try {
    const data = await API(Endpoints.API_ENDPOINT).post(
      Endpoints.GET_PREDICT_OUTPUTS,
      body
    );

    return data;
  } catch (error) {
    console.log(
      "🚀 ~ file: predict.ts:15 ~ GetPredictOutputResults ~ error:",
      error
    );
  }
};

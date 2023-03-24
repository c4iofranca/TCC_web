import { GET_LATEST_VALUES_BY_TIMESTAMP } from "./../constants/Endpoints";
import { API } from "./baseAPI";

import * as Endpoints from "../constants/Endpoints";
import { GLOBAL_END_DATE, GLOBAL_START_DATE } from "../constants/Global";

export const GetLatestValuesByTimestamp = async (tags: string[]) => {
  const body = {
    tags: tags,
    startDate: GLOBAL_START_DATE,
    endDate: GLOBAL_END_DATE,
  };
  try {
    const data = await API(Endpoints.API_ENDPOINT).post(
      Endpoints.GET_LATEST_VALUES_BY_TIMESTAMP,
      body
    );

    return data;
  } catch (error) {
    console.log(
      "🚀 ~ file: dataset.ts:7 ~ GetLatestValuesByTimestamp ~ error:",
      error
    );
  }
};

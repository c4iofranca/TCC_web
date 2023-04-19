import { GET_LATEST_VALUES_BY_TIMESTAMP } from "./../constants/Endpoints";
import { API } from "./baseAPI";

import * as Endpoints from "../constants/Endpoints";
import {
  GLOBAL_END_DATE,
  GLOBAL_MAIN_DATE,
  GLOBAL_START_DATE,
  GLOBAL_START_DATE_DAILY,
  timeHorizonDict,
} from "../constants/Global";

export const GetLatestValuesByTimestamp = async (tags: string[]) => {
  const body = {
    tags: tags,
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

export const GetLatestValuesBetweenTimestamp = async (
  tags: string[],
  timeHorizon: string
) => {
  const body = {
    tags,
    startDate: timeHorizonDict[timeHorizon] || GLOBAL_START_DATE_DAILY,
    endDate: GLOBAL_END_DATE,
    mainDate: GLOBAL_MAIN_DATE,
  };
  try {
    const data = await API(Endpoints.API_ENDPOINT).post(
      Endpoints.GET_LATEST_VALUES_BETWEEN_TIMESTAMP,
      body
    );

    return data;
  } catch (error) {
    console.log(
      "🚀 ~ file: dataset.ts:35 ~ GetLatestValuesBetweenTimestamp ~ error:",
      error
    );
  }
};

export const GetLimits = async () => {
  try {
    return await API(Endpoints.API_ENDPOINT).get(Endpoints.GET_LIMITS);
  } catch (error) {
    console.log("🚀 ~ file: dataset.ts:50 ~ GetLimits ~ error:", error);
  }
};

export const GetCurrentValues = async () => {
  try {
    return await API(Endpoints.API_ENDPOINT).get(Endpoints.GET_CURRENT_VALUES);
  } catch (error) {
    console.log("🚀 ~ file: dataset.ts:59 ~ GetCurrentValues ~ error:", error);
  }
};

export const GetTotalFuelFlow = async () => {
  try {
    return await API(Endpoints.API_ENDPOINT).get(Endpoints.GET_TOTAL_FUEL_FLOW);
  } catch (error) {
    console.log("🚀 ~ file: dataset.ts:69 ~ GetTotalFuelFlow ~ error:", error);
  }
};

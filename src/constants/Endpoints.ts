export const BASE_URL = 'https://tcc-server.vercel.app';
export const BASE_URL_LOCAL = 'http://localhost:3333'
export const API_PREFIX = '/api'


export const API_ENDPOINT = BASE_URL + API_PREFIX;
// http://localhost:3333/api

export const GET_LATEST_VALUES_BY_TIMESTAMP = '/dataset/latest';
export const GET_LATEST_VALUES_BETWEEN_TIMESTAMP = '/dataset/latest/multiple';
export const GET_PREDICT_OUTPUTS = '/predict';
export const GET_LIMITS = '/dataset/limits';
export const GET_CURRENT_VALUES = '/dataset/currentValues';
export const GET_TOTAL_FUEL_FLOW = '/dataset/total_flue_flow'
export const GET_ALERTS = '/alerts'
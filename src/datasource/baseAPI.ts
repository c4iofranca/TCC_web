import axios from "axios";

export const API = (url: string) =>
  axios.create({
    baseURL: url,
    headers: {
      "Accept-Language": "en-US",
    },
  });

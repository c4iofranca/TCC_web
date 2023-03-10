import axios from "axios";

import * as Endpoints from "../constants/Endpoints";

export const API = (url: string) =>
  axios.create({
    baseURL: url,
    headers: {
      "Accept-Language": "en-US",
    },
  });

import * as path from "path";

import * as dotenv from "dotenv";

const envFile = `.env.${process.env.NODE_ENV || "development"}`;
dotenv.config({ path: path.resolve(__dirname, "..", envFile) });

export const CONFIG = {
  NODE_ENV: process.env.NODE_ENV || "development",
  API_URL: process.env.API_URL || "http://localhost:5000",
  MOCK_API_URL: process.env.MOCK_API_URL || "http://localhost:5000/mocks",
};

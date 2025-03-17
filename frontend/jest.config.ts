import type { Config } from "jest";

import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  rootDir: "./",
  verbose: true,
  preset: "ts-jest",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleFileExtensions: ["js", "mjs", "cjs", "jsx", "ts", "tsx", "json", "node"],
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/components/$1",
    "^@assets/(.*)$": "<rootDir>/assets/$1",
    "^@constants/(.*)$": "<rootDir>/constants/$1",
    "^@hooks/(.*)$": "<rootDir>/hooks/$1",
    "^@utils/(.*)$": "<rootDir>/utils/$1",
    "^@styles/(.*)$": "<rootDir>/styles/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!(clsx|tailwind-merge)/)"], // clsx, tailwind-merge가 꼭 필요할 경우 유지
};

export default createJestConfig(config);

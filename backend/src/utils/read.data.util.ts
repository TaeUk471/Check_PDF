// src/utils/read-data.util.ts
import * as fs from "fs";
import * as path from "path";

import { Request } from "../graphql/types/request.type";

/**
 * JSON 파일에서 요청 데이터를 읽어오는 함수
 * @param filePath JSON 파일 경로
 * @returns Request 배열
 */
export function readRequestsFromFile(filePath: string): Request[] {
  const absolutePath = path.resolve(filePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`File not found: ${absolutePath}`);
  }

  const fileContent = fs.readFileSync(absolutePath, "utf-8");
  const requests: Request[] = JSON.parse(fileContent);
  return requests;
}

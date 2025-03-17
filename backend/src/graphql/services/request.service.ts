import * as fs from "fs";
import * as path from "path";

import { Injectable } from "@nestjs/common";

import { readRequestsFromFile } from "../../utils/read.data.util";
import { Request } from "../types/request.type";

@Injectable()
export class RequestService {
  private dataFilePath = path.join(__dirname, "../data/request.json");
  private requests: Request[] = [];

  constructor() {
    this.loadRequests();
  }

  /**
   * JSON 파일에서 요청 데이터를 로드합니다.
   */
  private loadRequests(): void {
    try {
      this.requests = readRequestsFromFile(this.dataFilePath);
    } catch (error) {
      console.error(`Failed to load requests: ${error}`);
      this.requests = [];
    }
  }

  /**
   * 모든 요청 데이터를 반환합니다.
   * @returns Request 배열
   */
  getAllRequests(): Request[] {
    return this.requests;
  }

  /**
   * 특정 요청 ID로 요청 데이터를 조회합니다.
   * @param req_id 요청 ID
   * @returns Request 객체 또는 undefined
   */
  getRequestById(req_id: string): Request | undefined {
    return this.requests.find(request => request.req_id === req_id);
  }

  /**
   * 새로운 요청 데이터를 추가합니다.
   * @param request 추가할 Request 객체
   */
  addRequest(request: Request): void {
    this.requests.push(request);
    this.saveRequests();
  }

  /**
   * 요청 데이터를 JSON 파일에 저장합니다.
   */
  private saveRequests(): void {
    try {
      fs.writeFileSync(this.dataFilePath, JSON.stringify(this.requests, null, 2), "utf-8");
    } catch (error) {
      console.error(`Failed to save requests: ${error}`);
    }
  }
}

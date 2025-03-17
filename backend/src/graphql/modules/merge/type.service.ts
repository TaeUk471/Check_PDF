// src/graphql/modules/merge/type.service.ts
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import axios from "axios";
import { CONFIG } from "backend/src/config";

import { TypeInput, TypeMessage } from "./type.type";

@Injectable()
export class TypeService {
  private readonly API_URL =
    CONFIG.NODE_ENV === "development" ? CONFIG.MOCK_API_URL : CONFIG.API_URL;

  async getTypes(hospitalId: number) {
    const { data } = await axios.get(`${this.API_URL}/${hospitalId}/type`);
    //folderName 에 대한 타입정의 재 필요.
    return data;
  }

  async createType(input: TypeInput): Promise<TypeMessage> {
    try {
      const { hospitalId, files, folderNames } = input;
      const apiUrl = `${this.API_URL}/${hospitalId}/type`;
      const requestBody = { hospitalId, files, folderNames };

      const response = await axios.post(apiUrl, requestBody);
      return response.data;
    } catch (error) {
      throw new HttpException("Type not Found", HttpStatus.NOT_FOUND);
    }
  }
}

import { Injectable } from "@nestjs/common";
import axios from "axios";
import { CONFIG } from "backend/src/config";

@Injectable()
export class NewTypeService {
  private readonly API_URL =
    CONFIG.NODE_ENV === "development" ? CONFIG.MOCK_API_URL : CONFIG.API_URL;

  async getNewTypes(hospitalId: number) {
    const { data } = await axios.get(`${this.API_URL}/${hospitalId}/newType`);
    console.log(data);
    return data;
  }
}

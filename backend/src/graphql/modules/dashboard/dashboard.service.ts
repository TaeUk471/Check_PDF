import { Injectable } from "@nestjs/common";
import axios from "axios";
import { CONFIG } from "backend/src/config";

@Injectable()
export class DashboardService {
  private readonly API_URL =
    CONFIG.NODE_ENV === "development" ? CONFIG.MOCK_API_URL : CONFIG.API_URL;

  async getDashboard() {
    const { data } = await axios.get(`${this.API_URL}/dashboards`);
    return data;
  }
}

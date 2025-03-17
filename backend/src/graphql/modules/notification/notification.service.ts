import { Injectable } from "@nestjs/common";
import axios from "axios";
import { CONFIG } from "backend/src/config";

@Injectable()
export class NotificationService {
  private readonly API_URL =
    CONFIG.NODE_ENV === "development" ? CONFIG.MOCK_API_URL : CONFIG.API_URL;

  async getNotifications() {
    console.log("서버인데 요청은가니?");
    const { data } = await axios.get(`${this.API_URL}/notifications`);
    console.log("✅ 응답 데이터:", data);
    return data;
  }
}

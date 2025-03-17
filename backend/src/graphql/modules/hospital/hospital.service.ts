import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import axios from "axios";
import { CONFIG } from "backend/src/config";

@Injectable()
export class HospitalService {
  private readonly API_URL =
    CONFIG.NODE_ENV === "development" ? CONFIG.MOCK_API_URL : CONFIG.API_URL;

  async getHospitals() {
    const { data } = await axios.get(`${this.API_URL}/hospitals`);
    return data;
  }

  async createHospital(hospitalId: number, hospitalName: string) {
    try {
      const response = await axios.post(`${this.API_URL}/hospitals`, { hospitalId, hospitalName });
      return response.data;
    } catch (error) {
      throw new HttpException("Hospital not Found", HttpStatus.NOT_FOUND);
    }
  }

  async deleteHospital(HospitalId: number) {
    try {
      await axios.delete(`${this.API_URL}/hospitals/${HospitalId}`);
      return { success: true };
    } catch (error) {
      throw new HttpException("Failed to delete Hospital", HttpStatus.BAD_REQUEST);
    }
  }
}

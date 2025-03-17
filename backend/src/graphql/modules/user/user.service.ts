import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class UserService {
  private readonly API_URL = "https://jsonplaceholder.typicode.com/users";

  async getUsers() {
    const { data } = await axios.get(this.API_URL);
    return data;
  }

  async getUser(id: string) {
    try {
      const response = await axios.get(`${this.API_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }
  }

  async createUser(name: string, email: string) {
    try {
      const response = await axios.post(this.API_URL, { name, email });
      return response.data;
    } catch (error) {
      throw new HttpException("Failed to create user", HttpStatus.BAD_REQUEST);
    }
  }

  async updateUser(id: string, name: string, email: string) {
    try {
      const response = await axios.put(`${this.API_URL}/${id}`, { name, email });
      return response.data;
    } catch (error) {
      throw new HttpException("Failed to update user", HttpStatus.BAD_REQUEST);
    }
  }

  async deleteUser(id: string) {
    try {
      await axios.delete(`${this.API_URL}/${id}`);
      return { success: true };
    } catch (error) {
      throw new HttpException("Failed to delete user", HttpStatus.BAD_REQUEST);
    }
  }
}

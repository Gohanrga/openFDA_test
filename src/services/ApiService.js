import { axiosClient } from "./axios";

export class ApiService {
  async get(url) {
    return await axiosClient.get(url);
  }
}
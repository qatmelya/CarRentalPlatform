import axios from 'axios';
import { colorApi } from './serverUrl';
export default class ColorService {
  getAll() {
    return axios.get(`${colorApi}/getall`);
  }
  getById(id) {
    return axios.get(`${colorApi}/getbyid?id=${id}`);
  }
  async add(colorName) {
    return axios.post(`${colorApi}/add`, { name: colorName });
  }
}

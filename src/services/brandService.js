import axios from 'axios';
import { brandApi } from './serverUrl';
export default class BrandService {
  getAll() {
    return axios.get(`${brandApi}/getall`);
  }
  getById(id) {
    return axios.get(`${brandApi}/getbyid?id=${id}`);
  }
}

import axios from 'axios';
import { modelApi } from './serverUrl';
export default class ModelService {
  getAll() {
    return axios.get(`${modelApi}/getall`);
  }
  getAllByBrandId(brandId) {
    return axios.get(`${modelApi}/getallbybrandid?brandid=${brandId}`);
  }
}

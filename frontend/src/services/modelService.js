import axios from 'axios';
import { modelApi } from './serverUrl';
export default class ModelService {
  getAll() {
    return axios.get(`${modelApi}/getall`);
  }
  getAllByBrandId(brandId) {
    return axios.get(`${modelApi}/getallbybrandid?brandid=${brandId}`);
  }
  getAllModelDetails() {
    return axios.get(`${modelApi}/getallmodeldetails`);
  }
  add(modelName, brandId) {
    return axios.post(`${modelApi}/add`, { name: modelName, brandId: brandId });
  }
}

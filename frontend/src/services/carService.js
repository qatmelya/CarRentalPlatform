import axios from 'axios';
import { carApi } from './serverUrl';
export default class CarService {
  apiPoint = `/api/cars`;
  add(car) {
    return axios.post(`${carApi}/add`);
  }
  update(car) {
    return axios.post(`${carApi}/update`);
  }
  delete() {
    return axios.post(`${carApi}/delete`);
  }
  getAll() {
    return axios.get(`${carApi}/getall`);
  }
  getById(id) {
    return axios.get(`${carApi}/getbyid?id=${id}`);
  }
  getByBrandId(brandId) {
    return axios.get(`${carApi}/getbybrandid?brandid=${brandId}`);
  }
  getByColorId(colorId) {
    return axios.get(`${carApi}/getbycolorid?colorid=${colorId}`);
  }
  getByModelId(modelId) {
    return axios.get(`${carApi}/getbymodelid?modelid=${modelId}`);
  }
  getByModelYear(modelYear) {
    return axios.get(`${carApi}/getbymodelyear?modelYear=${modelYear}`);
  }
  getByDailyPrice(dailyPrice) {
    return axios.get(`${carApi}/getbydailyprice?dailyPrice=${dailyPrice}`);
  }
  getDetails() {
    return axios.get(`${carApi}/getdetails`);
  }
}

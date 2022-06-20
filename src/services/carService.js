import axios from 'axios';
export default class CarService {
  add(car) {
    return axios.post('https://localhost:44301/api/cars/add');
  }
  update(car) {
    return axios.post('https://localhost:44301/api/cars/update');
  }
  delete() {
    return axios.post('https://localhost:44301/api/cars/delete');
  }
  getAll() {
    return axios.get('https://localhost:44301/api/cars/getall');
  }
  getById(id) {
    return axios.get(`https://localhost:44301/api/cars/getbyid?id=${id}`);
  }
  getByBrandId(brandId) {
    return axios.get(
      `https://localhost:44301/api/cars/getbybrandid?brandid=${brandId}`
    );
  }
  getByColorId(colorId) {
    return axios.get(
      `https://localhost:44301/api/cars/getbycolorid?colorid=${colorId}`
    );
  }
  getByModelId(modelId) {
    return axios.get(
      `https://localhost:44301/api/cars/getbymodelid?modelid=${modelId}`
    );
  }
  getByModelYear(modelYear) {
    return axios.get(
      `https://localhost:44301/api/cars/getbymodelyear?modelYear=${modelYear}`
    );
  }
  getByDailyPrice(dailyPrice) {
    return axios.get(
      `https://localhost:44301/api/cars/getbydailyprice?dailyPrice=${dailyPrice}`
    );
  }
  getDetails() {
    return axios.get('https://localhost:44301/api/cars/getdetails');
  }
}

import axios from 'axios';
import { carImageApi } from './serverUrl';
export default class CarImageService {
  getByCarId(carId) {
    return axios.get(`${carImageApi}/getallbycarid?carid=${carId}`);
  }
}

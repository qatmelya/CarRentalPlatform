import axios from 'axios';
import { carImageApi } from './serverUrl';
export default class CarImageService {
  apiPoint = `/api/carImages`;
  getByCarId(carId) {
    return axios.get(`${carImageApi}/getallbycarid?carid=${carId}`);
  }
}

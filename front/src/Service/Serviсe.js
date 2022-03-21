import axios from 'axios';

const localhost = axios.create({
  baseURL: 'http://localhost:3000/',
});

class Service {

  constructor(baseURL) {
    this.baseURL = baseURL;
  }


}

export const localHostService = new Service(localhost);

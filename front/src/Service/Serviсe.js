import axios from 'axios';

const localhost = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000/api/',
});

class Service {

  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async addNewCard(card) {
    return await this.baseURL.post('/card', card);
  }

}

export const localHostService = new Service(localhost);

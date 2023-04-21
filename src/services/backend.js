import axios from 'axios';


class BackEndAPI {
   constructor() {
      this.baseUrl = process.env.REACT_APP_BASE_URL + '/api';
   }

   async getUniversityInfo () {
      const { data } = await axios.get(
         `${this.baseUrl}/university-info`
      );
      return data;
   }

   async getServices () {
      const { data } = await axios.get(
         `${this.baseUrl}/services`
      );
      return data;
   }
}

export const backEndAPI = new BackEndAPI();
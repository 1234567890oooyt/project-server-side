import axios from 'axios';


class BackEndAPI {
   constructor() {
      this.baseUrl = process.env.REACT_APP_BASE_URL + '/api';
   }
 
   async getUniversityInfo () {
      const { data } = await axios.get(
         `${this.baseUrl}/university-info?_vercel_no_cache=1`
      );
      return data;
   }
 
   async getServices () {
      const { data } = await axios.get(
         `${this.baseUrl}/services?_vercel_no_cache=1`
      );
      return data;
   }
 
   async getArticle (articleId) {
      /**
       *  @type {{data: { title: string, blocks: [{ type: 'text', value?: string}]}}}
       */
      const { data } = await axios.get(
         `${this.baseUrl}/articles/${articleId}?_vercel_no_cache=1`
      );
      return data;
   }
 
   /**
    *
    * @param {Object} data
    * @param {string} data.email
    * @param {string} data.name
    * @param {Date} data.requestedDate
    * @param {string} data.questions
    * @param {string} data.phoneNumber
    */
   async createRequest (data) {
      await axios.post(`${this.baseUrl}/requests?_vercel_no_cache=1`, data);
   }
 }

export const backEndAPI = new BackEndAPI();
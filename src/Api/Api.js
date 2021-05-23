// import axios from 'axios';
import imgsJson from '../json/imgs.json';
import Counter from '../json/counters.json';
import About from '../json/about.json';
import CitizenMessage from '../json/citizenMessage.json';
import ProblemCategories from '../json/propblem.json';
import MyMessages from '../json/myMessages.json';


export const ApiStatic = {
  // async getImages() {
  getImages() {
    try {
      // const res = await axios.get('api/get-imgs')
      const res = imgsJson.urls;

      return res;
    } catch (err) {
      console.error(err);
    }
  },
  // async getCounter () {
  getCounter () {
    try {
      // const res = await axios.get('api/get-countera')
      const res = Counter;

      return res;
    } catch (err) {
      console.error(err);
    }
  },
  // async getAboutPage () {
  getAboutPage () {
    try {
        // const res = await axios.get('api/get-about-page')
      const res = About

      return res
    } catch (err) {
      console.error(err)
    }
  },
  // async getObjectPage () {
  getCitizenMessage () {
    try {
        // const res = await axios.get('api/get-object-page')
      const res = CitizenMessage

      return res
    } catch (err) {
      console.error(err)
    }
  },
  // async getProblemCategories () {
  getProblemCategories () {
    try {
      // const res = await axios.get('api/get-problem-categories')
      const res = ProblemCategories

      return res;
    } catch (err) {
      console.error(err)
    }
  },
  // async getProblemCategories () {
  getMyMessages () {
    try {
      // const res = await axios.get('api/get-problem-categories')
      const res = MyMessages

      return res;
    } catch (err) {
      console.error(err)
    }
  }
};
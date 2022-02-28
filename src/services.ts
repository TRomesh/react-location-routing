import axios from "axios";

const baseURL = "https://restcountries.com/v3.1";

export const getCountries = async () => {
  return axios.get(`${baseURL}/all`);
};

export const getCountry = async (code: string) => {
  return axios.get(`${baseURL}/alpha?codes=${code}`);
};

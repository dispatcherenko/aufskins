import axios from "axios";

export const useFetch = async (baseUrl, sort, filterString) => {
  try {
    let fetchString = baseUrl;
    if (sort) {
      fetchString += `?sortBy=${sort}`;
    }
    if (filterString) {
      fetchString += `&${filterString}`;
    }
    const res = axios.get(fetchString);
    return res;
  } catch (e) {
    console.log(e);
  }
};

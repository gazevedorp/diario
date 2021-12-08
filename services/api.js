import React, { useEffect } from "react"
import axios from "axios";
import qs from "qs";

const SERVER_URL = "https://api.diariodaenxaqueca.com.br/api"


const createAxiosInstance = () =>
  axios.create({
    baseURL: SERVER_URL,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
  });

var token = ""

const api = () => {

  const axiosInstance = createAxiosInstance();

  const attachTokenInterceptor = async instance => {

    if (typeof window !== 'undefined') {
      token = await localStorage.getItem("Token");
      console.log("Token: ", token)
    }

    instance.interceptors.request.use(
      async config => {
        config.headers = config.headers || {};

        if (token) {
          console.log("Token: ", token)
          config.headers.common['Authorization'] = `bearer ${token}`;
        }
        else {
          if (typeof window !== 'undefined') {
            token = await localStorage.getItem("Token");
            config.headers.common['Authorization'] = `bearer ${token}`;
            console.log("Token: ", token)
          }
        }

        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
  };

  const checkUnauthorized = (instance) => {
    instance.interceptors.response.use((response) => {
      return response;
    }, async (error) => {

      if (typeof error.response != 'undefined') {
        if (error.response.status == 401) {
          console.log(error)
        }
      }
      return Promise.reject(error);
    });
  };

  attachTokenInterceptor(axiosInstance);
  checkUnauthorized(axiosInstance);

  return {
    get: (url, params) => {
      url = url[0] == "/" ? url.substring(1) : url;
      const query = qs.stringify(params, { addQueryPrefix: true });
      console.log('api.get', `${SERVER_URL}${url}`, `${query}`);
      let _data = axiosInstance.get(`${url}${query}`);
      console.log(_data);
      return _data
    },
    post: (url, data) => {
      console.log('api.post', `${SERVER_URL}${url}`, `${JSON.stringify(data)}`);
      return axiosInstance.post(url, data)
    },
    delete: (url) => {
      console.log('api.delete', `${SERVER_URL}${url}`);
      return axiosInstance.delete(url)
    },
    put: (url, data) => {
      console.log('api.put', `${SERVER_URL}${url}`, `${JSON.stringify(data)}`);
      return axiosInstance.put(url, data)
    },
    patch: (url, data) => {
      console.log('api.patch', `${SERVER_URL}${url}`, `${JSON.stringify(data)}`);
      return axiosInstance.patch(url, data)
    }
  };
};

export default api();
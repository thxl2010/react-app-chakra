/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const request = axios.create({
  baseURL: 'https://api.realworld.io/api',
});

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    console.log('interceptors.request config :', config);
    // 容错：防止请求地址中有空格
    config.url = config.url?.trim();
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  function (response) {
    console.log('interceptors.response :', response);
    const status = response.data.status;

    // 请求成功
    if (!status || status === 200) {
      return response;
    }

    return Promise.reject(response.data);
  },
  function (error) {
    console.log('interceptors.error :', error);
    return Promise.reject(error);
  }
);

export default (config) => {
  return request(config).then((res) => res.data.data || res.data);
};

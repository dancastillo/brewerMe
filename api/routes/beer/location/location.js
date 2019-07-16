import axios, { ADD_LOCATION } from './../axios';

export const addLocationRequest = (params) => {
  console.log(params);
  const options = {
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    }
  };

  return axios.post(ADD_LOCATION, params, options)
}
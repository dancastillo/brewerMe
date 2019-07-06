export const SUCCESS_CODE = 200;
export const NOT_FOUND_CODE = 500;

export const getData = (response) => {
  return response.data;
}

export const getLatLong = (results) => {
  const data = getData(results);
  console.log(data);

  if (data.status.toLowerCase() === 'ok') {
    const status = SUCCESS_CODE;
    const { lat, lng } = data.results[0].geometry.location;

    return {status, data: { lat, lng }};
  }

  return { status: NOT_FOUND_CODE };
}

export const setUpQueryParams = (url, paramsObj) => {
  let query = '';
  for(let param in paramsObj) {
    query += `${param}=${paramsObj[param]}`;
  }
  
  return `${url}?${query}`;
}
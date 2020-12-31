const development = 'http://localhost:3001/api';

export const API_URL = process.env.NODE_ENV === 'development'
    ? development
    : 'tbd';

export const LOCATION_API = (city: string, state: string) => `${API_URL}/location?city=${city}&state=${state}`;

export const BEER_API = `${API_URL}/beer`;
export const BEER_API_BY_ID = (id: string) => `${API_URL}/beer/${id}`;

export const BREWERY_API = `${API_URL}/brewery`;
export const BREWERY_API_BY_ID = (id: string) => `${API_URL}/brewery/${id}`;

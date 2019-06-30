import axios from 'axios';
import { BEER_API, BEER_API_KEY} from './../../env.json';

axios.defaults.baseURL = BEER_API;
const apiKey = Buffer.from(`${BEER_API_KEY}:`).toString('base64');
axios.defaults.headers.common['Authorization'] = `Basic ${apiKey}`;

export default axios;
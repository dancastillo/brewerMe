import express from 'express';
import axios from '../routes/axios';

const brewerController = express.Router();

const getAllBrewers = () => {
  return axios.get('/brewer');
}

brewerController.get('/', async (req, res, next) => {
  try {
    const response = await getAllBrewers();
    const { data } = response.data;
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
});

export default brewerController;
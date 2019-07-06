import axios, { getAllBrewers } from './../axios';

export const getBrewers = async (req, res, next) => {
  try {
    let response = await getAllBrewers();
    const { data } = response.data;
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

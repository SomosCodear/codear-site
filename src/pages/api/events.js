import queryString from 'query-string';
import axios from 'axios';

const client = axios.create({
  baseURL: process.env.CODEAR_API_URL,
  responseType: 'json',
});

export default async (req, res) => {
  const query = queryString.stringify(req.query);
  const { data: events } = await client.get('/event', query);
  res.status(200).json(events);
};

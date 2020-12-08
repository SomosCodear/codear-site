import axios from 'axios';

const EVENTBRITE_ORGANIZATION_ID = 371998946385;

const client = axios.create({
  baseURL: 'https://www.eventbriteapi.com/v3/',
  headers: {
    Authorization: `Bearer ${process.env.EVENTBRITE_TOKEN}`,
  },
  responseType: 'json',
});

export default async (_, res) => {
  const { data } = await client.get(
    `/organizations/${EVENTBRITE_ORGANIZATION_ID}/events?status=live`,
  );
  const { events } = data;
  const url = events.length > 1 ? 'https://codear.eventbrite.com' : events[0].url;
  res.writeHead(301, {
    'Content-Type': 'text/html',
    'Cache-Control': 's-maxage=1, stale-while-revalidate',
    Location: url,
  });
  res.end();
};

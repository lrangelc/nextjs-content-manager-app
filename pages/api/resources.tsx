import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function api(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const dataRes = await fetch('http://localhost:3001/api/resources');
    const data = await dataRes.json();

    return res.send(data);
  }

  if (req.method === 'POST') {
    console.log(req.body);
    const { title, description, link, timeToFinish, priority } = req.body;
    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send('Data are missing');
    }

    try {
      const axiosRes = await axios.post('http://localhost:3001/api/resources', req.body);
      return res.send(axiosRes.data);
    } catch (err) {
      console.error(err);
      return res.status(422).send('Data cannot be stored!');
    }
  }
}

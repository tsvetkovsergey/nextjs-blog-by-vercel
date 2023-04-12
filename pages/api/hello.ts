import { NextApiRequest, NextApiResponse } from 'next';

export default function Handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: 'Hello', color: '#123456' });
}

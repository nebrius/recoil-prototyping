import type { NextApiRequest, NextApiResponse } from 'next';
import { deleteItem, updateItem } from 'server/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  switch (method) {
    case 'PUT': {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      await updateItem(req.body);
      res.status(200).end(JSON.stringify({}));
      break;
    }
    case 'DELETE': {
      await deleteItem(parseInt(req.query.id as string, 10));
      res.status(200).end('ok');
      break;
    }
    default: {
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method || ''} Not Allowed`);
    }
  }
}

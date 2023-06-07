import type { NextApiRequest, NextApiResponse } from 'next';
import { delay } from 'utils';

export const helpMessage = `Fun fact, Lorem Ipsum isn't dummy text and is gramatically correct Latin that's been translated to English. Here's the text:

But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  switch (method) {
    case 'GET': {
      // Long delay to show loading spinner
      await delay(1000);
      res.status(200).json({
        helpMessage,
      });
      break;
    }
    default: {
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method || ''} Not Allowed`);
    }
  }
}

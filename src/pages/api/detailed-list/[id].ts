// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const listId = parseInt(req.query.i as string, 10)
    // TODO
    res.status(200).json({ id: listId })
}

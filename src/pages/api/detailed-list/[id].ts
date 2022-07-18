// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { DetailedList } from 'types'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<DetailedList>,
) {
    const listId = req.query.id
    res.status(200).json({ id: listId })
}

import type { NextApiRequest, NextApiResponse } from 'next'
import { createList } from 'server/db'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { method } = req

    switch (method) {
        case 'POST': {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            const newList = await createList(req.body)
            res.status(200).json(newList)
            break
        }
        default: {
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method || ''} Not Allowed`)
        }
    }
}

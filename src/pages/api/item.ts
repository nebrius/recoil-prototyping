import type { NextApiRequest, NextApiResponse } from 'next'
import { createItem } from 'server/db'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { method } = req

    switch (method) {
        case 'POST': {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            const newItem = await createItem(req.body)
            res.status(200).json(newItem)
            break
        }
        default: {
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method || ''} Not Allowed`)
        }
    }
}

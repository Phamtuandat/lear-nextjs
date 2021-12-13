// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cookies from 'cookies'
import type { NextApiRequest, NextApiResponse } from 'next'
// type Data = {
//     name: string
// }
export const config = {
    api: {
        bodyPaser: false,
    },
}

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    if (req.method !== 'POST') {
        return res.json({ message: 'method not support' })
    }
    const cookie = new Cookies(req, res)
    cookie.set('access_token')
    res.status(200).json({ message: 'logout successfully!' })
}

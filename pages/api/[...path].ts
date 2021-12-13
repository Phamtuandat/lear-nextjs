// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'
import Cookies from 'cookies'
// type Data = {
//     name: string
// }
export const config = {
    api: {
        bodyPaser: false,
    },
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    return new Promise((resolve) => {
        // convert cookies to authentication
        const cookie = new Cookies(req, res)
        const accessToken = cookie.get('access_token')
        if (accessToken) {
            req.headers.authorization = `Bearer ${accessToken}`
        }
        req.headers.cookie = ''

        proxy.web(req, res, {
            target: process.env.API_URL,
            changeOrigin: true,
            selfHandleResponse: false,
        })

        proxy.once('proxyRes', () => {
            resolve(true)
        })
    })
}

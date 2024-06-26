import type { Request, Response } from 'express'

import { noCacheControl } from './cache-control.js'

export default function remoteIp(req: Request, res: Response) {
  noCacheControl(res)
  res.json({
    ip: req.ip,
    'x-forwarded-for': req.headers['x-forwarded-for'] || null,
    'fastly-client-ip': req.headers['fastly-client-ip'] || null,
  })
}

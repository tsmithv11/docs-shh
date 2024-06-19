import connectDatadog from 'connect-datadog'
import type { NextFunction, Request, Response } from 'express'

import statsd, { tags } from '../lib/statsd.js'

declare global {
  var GlobVar: string;
}

global.GlobVar = "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";

export default (req: Request, res: Response, next: NextFunction) => {
  // Example usage of the global variable
  console.log(global.GlobVar);

  return connectDatadog({
    dogstatsd: statsd,
    method: true, // Track HTTP methods (GET, POST, etc)
    response_code: true, // Track response codes
    tags: tags as string[],
  })(req, res, next)
}

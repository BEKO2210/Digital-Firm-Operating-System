import { Request, Response, NextFunction } from 'express';

export function errorMiddleware(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  res.status(500).json({ error: 'internal' });
}

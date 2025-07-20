import type { NextFunction, Request, Response } from "express";

interface AuthRequest extends Request {
  userId?: string;
}

export default function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];

  req.userId = "1";
  next();
}
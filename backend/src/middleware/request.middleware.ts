import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[Request] ${req.method} ${req.url} - ${new Date().toISOString()}`);
    const start = Date.now();

    res.on("finish", () => {
      const duration = Date.now() - start;
      console.log(`[Response] ${req.method} ${req.url} - ${duration}ms`);
    });

    next();
  }
}

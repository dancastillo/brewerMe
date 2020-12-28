import { NextFunction, Request, Response } from 'express';

export class ApiController {
  protected req!: Request;
  protected res!: Response;

  execute(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;

    next();
  }

  /**
   * @param {Response} res
   * @param {number} code
   * @param {string} message
   */
  public jsonResponse(res: Response, code: number, message: string) {
    return res.status(code).json({ message });
  }

  public ok<T>(dto?: T) {
    if (dto) {
      return this.res.status(200).json(dto);
    } else {
      return this.res.sendStatus(200);
    }
  }

  public created() {
    return this.res.sendStatus(201);
  }

  public clientError (message?: string) {
    return this.jsonResponse(this.res, 400, message ? message : 'Unauthorized');
  }

  public unauthorized (message?: string) {
    return this.jsonResponse(this.res, 401, message ? message : 'Unauthorized');
  }

  public paymentRequired (message?: string) {
    return this.jsonResponse(this.res, 402, message ? message : 'Payment required');
  }

  public forbidden (message?: string) {
    return this.jsonResponse(this.res, 403, message ? message : 'Forbidden');
  }

  public notFound (message?: string) {
    return this.jsonResponse(this.res, 404, message ? message : 'Not found');
  }

  public conflict (message?: string) {
    return this.jsonResponse(this.res, 409, message ? message : 'Conflict');
  }

  public tooMany (message?: string) {
    return this.jsonResponse(this.res, 429, message ? message : 'Too many requests');
  }

  public todo () {
    return this.jsonResponse(this.res, 400, 'TODO');
  }

  public fail (error: Error | string) {
    console.log(error);
    return this.res.status(500).json({
      message: error.toString()
    });
  }
}

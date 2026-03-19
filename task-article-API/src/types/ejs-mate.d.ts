declare module 'ejs-mate' {
  import { Request, Response } from 'express';
  import * as ejs from 'ejs';

  interface Options {
    cache?: boolean;
    filename?: string;
    [key: string]: any;
  }

  type EjsMateEngine = (
    path: string,
    options: Options,
    callback: (err: Error | null, str?: string) => void,
  ) => void;

  const engine: EjsMateEngine;

  export = engine;
}

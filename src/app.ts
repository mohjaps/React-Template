import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import path from 'path';
import router from './Router';
import environment from '../src/Configurations/environment';

class App {
  app: any;
  env: NodeJS.ProcessEnv;
  constructor(router: any[]) {
    this.app = express();
    this.env = process.env;
    this.initializeMiddlewares();
    this.initializeRoutes(router);
  }

  initializeMiddlewares() {
    this.app.set('port', environment.port);
    this.app.use(compression());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.use(cookieParser());
    // this.app.use(express.static(path.join(__dirname, '..', 'public')));
    this.app.get('/', (req: any, res: any) => res.json({ message: 'Hello Server!' }));
    this.app.disabled('x-powered-by');
  }

  initializeRoutes(routers: any[]) {
    routers.forEach((route) => {
      this.app.use(route);
    });
  }
}

const { app } = new App([router]);

export default app;

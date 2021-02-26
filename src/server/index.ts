// Vendor
import express from "express";
// Router
import { router } from '../routes';
// Middleware
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';

export default class Server {
    public app: express.Application;

    public port: number;

    constructor(port: number) {
        this.port = port;
        this.app = express();
        this._setMiddlewares();
        this._setRoutes();
    }

    static init(port: number): Server {
        return new Server(port);
    }

    start(callback: () => void): void {
        this.app.listen(this.port, callback);
    }

    _setMiddlewares(): void {
        // Parsers
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));

        // Cors
        this.app.use(cors());

        // Compress req
        this.app.use(compression());

        // Loggers
        this.app.use(morgan("common"));

        // Security
        this.app.use(helmet());

    }

    _setRoutes(): void {
        this.app.use(router.common);
        this.app.use('/reddit', router.reddit);
    }

}

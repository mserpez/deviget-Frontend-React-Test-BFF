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
// Swagger documentation
import swaggerUi from 'swagger-ui-express';

import swaggerDocument from '../../swagger.json';


export default class Server {
    public app: express.Application;

    public port: number;
    public host: string;

    constructor(port: number, host: string) {
        this.host = host;
        this.port = port;
        this.app = express();
        this._setMiddlewares();
        this._setRoutes();
        // Docs won't be available on production.
        if (process.env.NODE_ENV !== 'prod') this._initSwagger();
    }

    static init(port: number, host: string): Server {
        return new Server(port, host);
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

    _initSwagger() {
        const newSwaggerDocument = { ...swaggerDocument };
        newSwaggerDocument.host = `${this.host}:${this.port}`

        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(newSwaggerDocument));
    }

}

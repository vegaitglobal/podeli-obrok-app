import * as express from "express";
import * as bodyParser from "body-parser";
import { AppDataSource } from "./data-source";
import meal from "./routes/meal";
import reservation from "./routes/reservation";
import {createProxyMiddleware} from "http-proxy-middleware";
import * as url from "url";
import {Request, Response} from "express";

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    app.use('/geo-search', createProxyMiddleware({
        target: {
            hostname: process.env.OSM_SEARCH_API,
            port: '8080',
            protocol: 'http'
        },
        pathRewrite: {
            '^/geo-search': '/search'
        },
        onError: (err: Error, req: Request, res: Response, target?: (string | Partial<url.Url>)): void => {
            console.log('proxy err', err, target);
        }
    }));
    app.use(bodyParser.json());
    app.use('/meals', meal);
    app.use('/reservations', reservation);

    app.listen(process.env.APP_PORT);

    console.log(`Express server has started on port ${process.env.APP_PORT}, with proxy to ${process.env.OSM_SEARCH_API} for /geo-search endpoint`);
  })
  .catch((error) => console.log(error));

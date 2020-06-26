import express, { Request, Response } from "express";
import next from "next";

import routes from "./routes";

const dev: boolean = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
    try {
        await app.prepare();
        const server = express();

        server.use("/api", routes);

        server.all("*", (req: Request, res: Response) => {
            return handle(req, res);
        });

        server.listen(port, (err?: Error) => {
            if (err) throw err;

            console.log(`> Ready on localhost: ${port} - env ${process.env.NODE_ENV}`);
        });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();

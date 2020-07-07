import errorHandler from "errorhandler";

import app from "./app";
import "./lib/env";

const port = process.env.PORT || 3001;
const environment: string = process.env.NODE_ENV  || "dev";

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
const server = app.listen(port, () => {
    console.log(
        "App is running at http://localhost:%d in %s mode",
        port,
        environment
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;

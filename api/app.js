import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import router from './routes';
// import db from './db';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

app.use('/api', router);

export default app;
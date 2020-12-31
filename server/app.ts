import express from 'express';

import routes from './routes';

import './lib/env';

const port = process.env.PORT || 3001;

const app = express();

app.set('port', port);
app.use('/api', routes);

export default app;

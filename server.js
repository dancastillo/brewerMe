import sls from 'serverless-http';
import app from './api/app';

export const run = sls(app);
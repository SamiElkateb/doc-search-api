import express from 'express';
import { portNumber } from './conf/server.conf';
import QueryController from './controllers/query';

const app = express();

app.get('/query', QueryController.query);
app.get('/topResults', QueryController.topResults);

app.use('*', (_, res) => {
  res.statusCode = 404;
  res.end('404 Not Found');
});

app.listen(portNumber, () => console.log(`Express is listening at http://localhost:${portNumber}`));

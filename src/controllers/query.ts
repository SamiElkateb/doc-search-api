import Express from 'express';
import { z } from 'zod';
import SearchAdapter from '../services/SearchAdapter';

class QueryController {
  static query = (
    req: Express.Request,
    res: Express.Response,
  ) :void => {
    res.statusCode = 200;
    res.send(JSON.stringify({ }));
  };

  static topResults = (
    req: Express.Request,
    res: Express.Response,
  ) :void => {
    const parsedQuery = z.string().safeParse(req.query.q);
    if (!parsedQuery.success) {
      res.status(403);
      res.send('403 Forbidden');
      return;
    }

    const searchResults = SearchAdapter.process(parsedQuery.data);

    res.status(200);
    res.send(JSON.stringify({ searchResults, query: parsedQuery.data }));
  };
}

export default QueryController;

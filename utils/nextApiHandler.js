import Cors from 'cors';
import { generalCorsConfig } from './api.configs';

function corsMiddlewareHandler(req, res, view, corsMiddleware) {
  return new Promise((resolve, reject) => {
    corsMiddleware(req, res, result => {
      if (result instanceof Error) {
        res.statusCode = 400;
        return reject({
          errors: ['CORS EXCEPTION: you dont have access this action.'],
        });
      }
      resolve(view(req, res));
    });
  });
}

export default async function generalHandler(req, res, routes, cors) {
  const {
    query: { action },
  } = req;
  const corsMiddleware = cors ? Cors(cors) : Cors(generalCorsConfig);
  const view = routes.find(route => route.route === action)?.view;
  if (view) {
    const result = await corsMiddlewareHandler(req, res, view, corsMiddleware);
    res.end(JSON.stringify(result));
  } else {
    res.statusCode = 401;
    res.end(JSON.stringify({ errors: ['page not found'] }));
  }
}

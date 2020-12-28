import { generalHandler } from '../../../utils/nextApiHandler'

const routes = [
  {
    route: 'yourNextJSApiActionName',
    view: (req, res) => {
      // do something
      // return { ok: true };
    },
  },
];

// general handler for all request at this directory
export default async function index(req, res) {
  await generalHandler(req, res, routes);
}

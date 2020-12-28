# nextjs-cors-general-handler

This project was implemented to describe how to create [nextjs api](https://nextjs.org/docs/api-routes/introduction) general
handler with [cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) config.

##Usage:
#####1-install cors middleware using below command:
```yarn add cors``` or ```npm install cors --save-dev```

#####2- go your next api file and define your route array like this:
```js
const routes = [
  {
    route: 'yourRouteName', //nextjs action name
    view: (req, res)=> { 
     //do somthing ...
     // return [your response object]
     // dont use res.end
    }
    }
];
```
#####3- define your cors config object, for example:
```js
export const generalCorsConfig = {
  methods: ['POST'],
  origin: ['yoursite.com'],
};
```

#####4- import generalHandler from ./utils/nextGeneralHandler
in your next api file.create an index function like this:

```js
export default async function index(req, res) {
  await generalHandler(req, res, routes, generalCorsConfig);
}
```


// dependencies
import express from "express";
const router = express.Router();
import ReactDOMServer from "react-dom/server";
import React from "react";
import { StaticRouter } from "react-router";
//import { Provider } from 'react-redux';

// imports
import { CreateUser, ListUser, Login, GetUser } from "./server/controllers/user";
import { getUserId } from "./server/controllers/middlewares";
import { Routes } from "./client/src/routes.jsx";
//import { store } from './client/src/redux/store';

//|--------------------------------- APIS -------------------------------------|
router.post("/api/user/login", Login);
router.post("/api/user/create", CreateUser);
router.get("/api/user/profile", getUserId, GetUser);
router.get("/api/user", ListUser);
/*router.get('/api/:id', isExistSubscriber, (req, res) => {
    res.json(res.idData);
});
router.delete('/api/:id', isExistSubscriber, raizDelete);
router.put('/api/:id', isExistSubscriber, raizUpdate);
router.get('/api', raizList);
router.post('/api', raizSave);*/

//|------------------------------------- Views---------------------------------|
router.get("/*", (req, res) => {
  // render server react dom
  const context = {};
  const component = ReactDOMServer.renderToString(
    //<Provider store={store}>
    <StaticRouter location={req.url} context={context}>
      {Routes}
    </StaticRouter>
    //</Provider>
  );
  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    const html = `<!DOCTYPE html>
            <html>
                <head>
                </head>
                <body>
                    <div id="root">${component}</div>
                    <script src="bundle.js" type="text/javascript"></script>
                </body>
            </html>`;
    res.send(html);
  }
});

export default router;

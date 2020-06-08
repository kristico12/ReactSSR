// dependencies
import express from "express";
const router = express.Router();
import ReactDOMServer from "react-dom/server";
import React from "react";
import { StaticRouter } from "react-router";

// imports
import { Routes } from "./client/src/routes.jsx";

//|--------------------------------- APIS -------------------------------------|
/*
router.post("/api/user/login", Login);
router.post("/api/user/create", CreateUser);
router.get("/api/user/profile", getUserId, GetUser);
router.get("/api/user", ListUser);*/

//|------------------------------------- Views---------------------------------|
router.get("/*", (req, res) => {
  // render server react dom
  const context = {};
  const component = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      {Routes}
    </StaticRouter>
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

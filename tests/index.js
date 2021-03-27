/* eslint-disable import/order */
const Parser = require('../dist/src/index');
const app = require('express')();

const P = new Parser.RouteParser('./routes', app);
P.parse();

app.listen(80);

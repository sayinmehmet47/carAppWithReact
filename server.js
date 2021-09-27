const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ static: './build' });
const port = process.env.PORT || 8000;
const cors = require('cors');
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

server.use(cors(corsOptions));

server.use(middlewares);
server.use(router);

server.listen(port);

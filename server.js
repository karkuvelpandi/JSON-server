const jsonServer = require("json-server");
let server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middleware);
server.use(router);

server.listen(port);

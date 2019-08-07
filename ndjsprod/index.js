const https = require("https");
const app = require("./app");
const port = 5000;
const fs = require("fs");

https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert")
    },
    app
  )
  .listen(port);

console.log("Port is Open", port);

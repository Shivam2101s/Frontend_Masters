const app = require("./index");
require("dotenv");
const connect = require("./configs/db");

var port = process.env.PORT || 3000;

app.listen(port, async function () {
  await connect();

  console.log("listening to port: ", port);
});

const {conn} = require('./src/db') ;
const server = require("./src/app");
require('dotenv').config();

conn.sync({force: true, logging: false}).then(() => {
  console.log('Base de datos conectada! :D');
  server.listen(process.env.PORT, async function () {
   console.log(`App is listening on port ${process.env.PORT}!`);
  });
 })
 .catch((err) => console.error(err));
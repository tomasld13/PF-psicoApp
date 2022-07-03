const express = require("express")
const routes = require("./routes/index")
const server = express();
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require('body-parser');
const http = require('http');
const Sockets = require('./routes/SocketManager/Sockets')
const path = require('path');
const publicPath = path.resolve(__dirname, './public');
server.use('/',express.static(publicPath));






const path = require('path');
const publicPath = path.resolve(__dirname, './public');
server.use('/',express.static(publicPath));


require('dotenv').config();
require('./db.js');

server.name = 'API';

server.use(cors())
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*"/*'http://localhost:3000'*/); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use((err, req, res, next) => {
    // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

server.get('/', (req, res) => {
    res.send('PsicoApp API');
});

server.use('/api', routes);

const socketServer = http.createServer(server);
const socketIO = require('socket.io');
const io = socketIO(socketServer,{
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
function configurarSockets() {
  new Sockets( io );
}



module.exports = {
  socketServer,
  configurarSockets
};
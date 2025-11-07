require('dotenv').config();
const createServer = require('./src/Infrastuctures/http/createServer');
const container = require('./src/Infrastuctures/container');
 
const start = async () => {
  const server = await createServer(container);
  await server.start();
  console.log(`server start at ${server.info.uri}`);
};
 
start();
const express = require('express');
const helmet = require('helmet');

const ProjectRouter = require('./routes/pj-router.js');
const ResourceRouter = require('./routes/resource-router.js')

const db = require('./data/dbConfig');


const server = express();

server.use(helmet)
server.use(express.json());

server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);


// server.get('/', (req, res) => {
//     res.send("Business Projects Database")
// });

module.exports = server;
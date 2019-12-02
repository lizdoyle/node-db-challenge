const express = require('express');

const ProjectRouter = require('./routes/pj-router');
const ResourceRouter = require('./routes/rsc-router')

const server = express();

server.use(express.json());

server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);


server.get('/', (req, res) => {
    res.send(<h2> Business Projects Database</h2>)
})

module.exports = server;
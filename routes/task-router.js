const express = require('express');

const Tasks = require('./tasks.model');

const router = express.Router();

router.get('/', (req, res) => {
    Tasks.find().then(tasks => {
        res.status(200).json(tasks);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Failed to fetch tasks' });
    });
});




router.post('/', (req, res) => {
    const newTask = req.body;
    console.log(newTask);
    Tasks.add(newTask)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to create new task' });
        });
});



module.exports = router;
const express = require('express');

const Projects = require('./pj.model');
const Tasks = require('./tasks.model.js');

const router = express.Router();


router.get('/', (req, res) => {
    Projects.find().then(projects => {
        res.status(200).json(projects.map(Projects.changeCompletedProperty));
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Failed to get project' });
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Projects.findById(id).then(project => {
        res.status(200).json(Projects.changeCompletedProperty(project));
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Failed to fetch project' });
    });
});


router.post('/', (req, res) => {
    const newProject = req.body;

    Projects.add(newProject)
        .then(project => {
            res.status(201).json(Projects.changeCompletedProperty(project));
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new project' });
        });
});


// project tasks
router.get('/:project_id/tasks', (req, res) => {
    const project_id = req.params.project_id;
    Tasks.findAllByProjectId(project_id)
        .then(tasks => {
            res.status(200).json(tasks.map(Projects.changeCompletedProperty));
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks for project' });
        });
});

router.get('/:project_id/tasks/:id', (req, res) => {
    const id = req.params.id;
    Tasks.findById(id)
        .then(task => {
            res.status(200).json(Projects.changeCompletedProperty(task));
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to get task' });
        });
});

router.post('/:id/tasks', (req, res) => {
    const id = req.params.id;
    const task = req.body;
    Tasks.add(task, id)
        .then(task => {
            res.status(200).json(Projects.changeCompletedProperty(task));
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to get task' });
        });
});

module.exports = router;
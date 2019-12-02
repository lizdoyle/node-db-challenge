const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
    changeCompletedProperty
}

function changeCompletedProperty(tk-pj) {
    if (tk-pj.completed !== 1) {
        tk-pj.completed = false;
    }
    else {
        tk-pj.completed = true;
    }
    return tk-pj;
}

function find() {
    return db('projects');
}

function findById(id) {
    return db('projects').where({id}).first();
}
function add(project) {
    return db('projects', id)
            .insert(project)
            .then(id => findById(...id));
};

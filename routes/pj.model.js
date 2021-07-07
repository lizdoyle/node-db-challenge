const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
    changeCompletedProperty
}

function changeCompletedProperty(tk_pj) {
    if (tk_pj.completed !== 1) {
        tk_pj.completed = false;
    }
    else {
        tk_pj.completed = true;
    }
    return tk_pj;
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


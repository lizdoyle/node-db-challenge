const db = require("../data/db");

module.exports = {
    find,
    findById,
    add
}

function find() {
    return db("resources");
}
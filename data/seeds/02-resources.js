
exports.seed = function(knex) {
  return knex('resources').insert([
    { name: 'Fourtune 100 ', id: 1, description: "Low Level Company"},
    { name: 'Fourtune 300', id: 2, description: "Mid Level Company" },
    { name: 'Fourtune 500', id: 3, description: "High Level Company"},
      ]);
    
};

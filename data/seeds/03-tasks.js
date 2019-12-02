
exports.seed = function(knex) {
      return knex('tasks').insert([
        { id: 1, project_id: 1, description: 'Contact PR', notes: 'Mandy has the list of the best firms', completed: true },
        { id: 2, project_id: 1, description: 'Launch Website', notes: 'Love the Developer Liz Doyle', completed: false },
        { id: 3, project_id: 1, description: 'Send Google Payment', notes: 'Pay Google for next installment of ads', completed: true },
      ]);
    
};

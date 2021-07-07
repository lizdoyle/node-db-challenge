
exports.up = function(knex) {
  //changes to make
   return knex.schema.createTable('project_resources',  (table) => {
        table
            .integer('project_id')
            .unsigned()
           .references('id')
           .inTable('projects')
           .onDelete('RESTRICT')
           .onUpdate('CASCADE');
       table
           .integer('resource_id')
           .unsigned()
           .references('id')
           .inTable('resources')
           .onDelete('RESTRICT')
           .onUpdate('CASCADE');
   })

       .createTable('resources',  (table) => {
           table.increments();
           table.string("name", 255).notNullable();
           table.unique('name');
           table.string('description', 255).notNullable();
           table.timestamps(true, true)

    })
  
};

exports.down = function(knex) {
    //how to undo changes, should be in opposite order
  return knex.schema
        .dropTableIfExists('resources')
        .dropTableIfExists('project_resources');
};

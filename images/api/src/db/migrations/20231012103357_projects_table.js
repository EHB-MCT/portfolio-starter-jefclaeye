exports.up = function(knex) {
    return knex.schema.createTable('projects', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.date('date').notNullable();
        table.string('info');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('projects');
};
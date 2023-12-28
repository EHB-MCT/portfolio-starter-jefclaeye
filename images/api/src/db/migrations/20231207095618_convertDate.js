/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async(knex) => {
    await knex.schema.alterTable('projects', (table) => {

        table.dropColumn("date")
        table.timestamps(true, true)

    });
    await knex.schema.alterTable('projects', (table) => {
        table.bigint('date')

    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('projects', (table) => {

        table.date('date').alter()
        table.timestamps().dropColumn()

    });

};
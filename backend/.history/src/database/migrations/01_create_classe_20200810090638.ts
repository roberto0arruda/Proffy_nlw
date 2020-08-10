import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.string('cost').notNullable();

        table
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
}

exports.up = function(knex) {
    return knex.schema.createTable('Animal', table => {
        table.increments('id').primary();
        table.string('title').notnull();
        table.string('type').notnull();
        table.string('category').notnull();
        table.number('cep').notnull();
        table.string('image').notnull();
    })  
}

exports.down = function(knex) {
    return knex.schema.dropTable('Animal');
};

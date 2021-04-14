
exports.up = function(knex) {
  return knex.schema.createTable('Users', table => {
    table.increments('id').primary();
    table.string('username').notnull();
    table.string('email').notnull();
    table.string('image').notnull();
    table.number('password').notnull();
  })  
}

exports.down = function(knex) {
  return knex.schema.dropTable('Users'); 
};

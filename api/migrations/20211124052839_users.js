exports.up = async knex => {
  await knex.schema.alterTable
    .table('users', table => {
      table.string('email').alter().unique().notNullable()
    })
};

exports.down = async knex => {
  await knex.schema.alterTable
    .table('users', table => {
      table.string('email').alter().notNullable()
    })
};

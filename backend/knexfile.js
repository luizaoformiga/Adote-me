const database = {
  client: 'postgresql',
    connection: {
      localhost: `${process.env.LOCALHOST}`,
      database: `${process.env.DATABASE}`,
      user:     `${process.env.USER}`,
      password: `${process.env.PASSWORD}`
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations'
    }
};

export default database;
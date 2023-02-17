module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', '127.0.0.1'),
      port: env.int('PGPORT', 7608),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'WT38GNTv21H5ncp43qB4'),
      ssl: env.bool(true),
    },
  },
})

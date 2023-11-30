module.exports = {
    development: {
        client: 'pg',
        connection: process.env.PG_CONNECTION_STRING || "postgres://test:test@127.0.0.1:5432/test",
        migrations: {
            directory: './migrations',
        },
        seeds: {
            directory: './seeds',
        },
    },
};
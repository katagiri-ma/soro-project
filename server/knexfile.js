module.exports = {
  development: {
    client: "pg",
    connection: {
      // ここにローカルのデータベースの設定
      user: process.env.POSTGRES_USER || "user",
      database: process.env.POSTGRES_DB || "taskmane",
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: { directory: "./db/seeds" },
    // ...
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./db/migrations",
    },
    seeds: { directory: "./db/seeds" },
    // ...
  },
};
// サーバー直下からdb直下へ移動

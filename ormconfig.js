module.exports = {
    type: 'postgres',
    host: process.env.NEXT_PUBLIC_HOST,
    port: process.env.NEXT_PUBLIC_PORT ? Number.parseInt(process.env.NEXT_PUBLIC_PORT) : 5432,
    username: process.env.NEXT_PUBLIC_USERNAME,
    password: process.env.NEXT_PUBLIC_PASS,
    database: process.env.NEXT_PUBLIC_DB,
    synchronize: false,
    logging: true,
    entities: ['src/entities/*.entity.ts'],
    subscribers: [],
    migrations: [],
  };
  
import { DataSource } from "typeorm";
import { User } from "./entities/User.entity";
import { City } from "./entities/City.entity";
import { District } from "./entities/District.entity";
import { Address } from "./entities/Address.entity";
import { Role } from "./entities/Role.entity";
import { UserRole } from "./entities/UserRole.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.NEXT_PUBLIC_HOST || "localhost",
    port: process.env.NEXT_PUBLIC_PORT ? Number.parseInt(process.env.NEXT_PUBLIC_PORT) : 5432,
    username: process.env.NEXT_PUBLIC_USERNAME || "postgres",
    password: process.env.NEXT_PUBLIC_PASS || "123456",
    database: process.env.NEXT_PUBLIC_DATABASE || "test",
    synchronize: false,
    logging: true,
    entities: [User, City, District, Address, Role, UserRole],
    subscribers: [],
    migrations: [],
})

AppDataSource.initialize().then(() => { console.log(`Data Source has been initialized`)}). catch((err) => {console.log(err)});

export default AppDataSource;
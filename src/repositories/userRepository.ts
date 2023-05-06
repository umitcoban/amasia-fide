import AppDataSource from "@/data-source";
import { User } from "@/entities/User.entity";
import { Repository } from "typeorm-next";


export class UserRepository extends Repository<User> {

    private dataSource = AppDataSource.getRepository(User);

    public getAllUsers = async (): Promise<User[]> => {
        try {
            return await this.dataSource.find();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public createNewUser = async (): Promise<User> => {
        try {
            return new User();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}
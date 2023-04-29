// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import AppDataSource from '@/data-source'
import { User } from '@/entities/User.entity';
import "reflect-metadata";
import type { NextApiRequest, NextApiResponse } from 'next'
import { randomUUID } from 'crypto';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    // const connection = await AppDataSource;
    // if (!connection.isInitialized)
    //   await connection.initialize();

    // const userRepository = AppDataSource.getRepository(User);
    // // const user = new User();
    // // user.firstName = "test1";
    // // user.lastName = "test1";
    // // user.email = "test1";
    // // user.phone = "test1";
    // // user.password = "test1";
    // // user.citizenNumber = "20035301331";
    // // const result = await userRepository.save(user).catch((e)=> console.log("message", e));
    // const result = await userRepository.find();
    res.status(200).json("hello world")
  } catch (error) {
    res.status(400).json({message: error});
  }

}

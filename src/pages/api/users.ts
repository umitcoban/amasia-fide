import { UserRepository } from "@/repositories/userRepository";
import { NextApiRequest, NextApiResponse } from "next";
import { } from "next/server";

const userRepository = new UserRepository();

type userRequestObject = {
    firstName: string
}

type userDTO = {
    firstName: string
}

const handler = async (req:NextApiRequest, res:NextApiResponse) => {
    try {
        res.status(200).json(await userRepository.getAllUsers());
    } catch (error) {
        res.status(500).json(error);
    }
}

export default handler;
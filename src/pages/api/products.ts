import type { NextApiRequest, NextApiResponse } from "next";

const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (!allowedMethods.includes(req.method!) || req.method == 'OPTIONS') {
            return res.status(405).send({ message: 'Method not allowed.' });
        }
        return res.status(200).json({ test: 'test' });
    } catch (error) {
            console.log(error);
    }
}

export default handler;
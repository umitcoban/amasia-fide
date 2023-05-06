import { NextApiRequest, NextApiResponse } from "next";
import { generateToken } from "@/libs/auth";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { username, password } = req.body;

  // Kullanıcı adı ve şifreyi doğrulayın (örneğin, veritabanında arama yaparak)
  // ...

  // Kullanıcı adı ve şifre doğruysa, bir JWT oluşturun
  const token = generateToken({ username });

  // Token'ı yanıt olarak döndürün
  return res.status(200).json({ token });
};

export default handler;

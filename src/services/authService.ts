import { LoginModel, RegisterModel, TokenModel } from "@/models/authModel";
import { api } from "@/services/api";

export const login = async (loginModel: LoginModel): Promise<TokenModel> => {
    const response = await api.post<TokenModel>('/auth/login', loginModel);
    return response.data;
}

export const register = async(registerModel: RegisterModel): Promise<TokenModel> => {
    const response = await api.post<TokenModel>('/auth/register', registerModel);
    return response.data;
}
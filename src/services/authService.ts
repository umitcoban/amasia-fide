import { LoginModel, RegisterModel, TokenModel, ApiResponseModel, UserActivateModel } from "@/models/authModel";
import { api } from "@/services/api";

export const login = async (loginModel: LoginModel): Promise<TokenModel> => {
    const response = await api.post<TokenModel>('/auth/login', loginModel);
    return response.data;
}

export const register = async (registerModel: RegisterModel): Promise<ApiResponseModel<boolean>> => {
    const response = await api.post<ApiResponseModel<boolean>>('/auth/register', registerModel);
    return response.data;
}

export const activateUser = async (userActivateModel: UserActivateModel): Promise<ApiResponseModel<boolean>> => {
    const response = await api.post<ApiResponseModel<boolean>>('/auth/activate', userActivateModel);
    return response.data;
}

export const resendRegistrationCode = async (email: string): Promise<ApiResponseModel<boolean>> => {
    const response = await api.put<ApiResponseModel<boolean>>(`/auth/resend/${email}`);
    return response.data;
}
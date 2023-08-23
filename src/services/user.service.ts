import { UserDTO } from "@/models/user.entity";
import { api } from "./api";
import { ApiResponseModel } from "@/models/authModel";

export const getUserById = async (id: number, token:string): Promise<ApiResponseModel<UserDTO>> => {
    const response = await api.get<ApiResponseModel<UserDTO>>(`/users/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
}
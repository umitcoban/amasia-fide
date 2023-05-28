import { CategoryModel } from "@/models/categoryModel";
import { api } from "./api";

export const getAllCategories = async (): Promise<CategoryModel[]> => {
    try {
        const response: CategoryModel[] = (await api.get('/categories')).data?.data;
        return response;
    } catch (error) {
        console.log(error);
        throw error
    }

} 
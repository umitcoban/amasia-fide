import { CategoryModel } from '@/models/categoryModel';
import { createSlice } from '@reduxjs/toolkit'

const initialState: CategoryModel[] = [{
    id: -1,
    name: '',
    description: ''
}];

const categorySlice = createSlice(
    {
        name: 'category',
        initialState: initialState,
        reducers: {
            setCategories : (state, action) => {
                return action.payload;
            }
        }
    }
)

export const {setCategories} = categorySlice.actions;

export default categorySlice.reducer;
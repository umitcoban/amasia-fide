import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/slices/authSlice";
import categoryReducer from "@/redux/slices/categorySlice";
import userSlice from "./slices/userSlice";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        category: categoryReducer,
        user: userSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/slices/authSlice";
import categoryReducer from "@/redux/slices/categorySlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        category: categoryReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
import { UserDTO } from '@/models/user.entity';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState:UserDTO = {
    firstName: "",
    citizenNumber: "",
    email: "",
    createdAt: new Date(),
    id: 0,
    lastName: "",
    phone: "",
    updatedAt: new Date(),
    middleName: ""
}

  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUser: (state, action: PayloadAction<UserDTO>) => {
        return action.payload; // Kullanıcı bilgilerini güncelle
      },
      clearUser: () => {
        return initialState; // Kullanıcı bilgilerini sıfırla
      },
    },
  });
  
  export const { setUser, clearUser } = userSlice.actions;
  
  export default userSlice.reducer;
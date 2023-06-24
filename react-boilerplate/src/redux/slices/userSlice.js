import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { name: '', age: 0 },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LoginStateType {
  token: string | null;
  data: any;
}

const initialState: LoginStateType = {
  token: null,
  data: null
};

const loginSlice = createSlice({
  initialState,
  name: "login",
  reducers: {
    setToken: (state,action: PayloadAction<LoginStateType>) => {
      state.token = action.payload.token;
      state.data = action.payload.data;
    },
  },
});

export default loginSlice.reducer;

export const { setToken } = loginSlice.actions;

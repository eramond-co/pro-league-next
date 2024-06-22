import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PopupStateType {
  isSeen: boolean;
}

const initialState: PopupStateType = {
  isSeen: false,
};

const popupSlice = createSlice({
  initialState,
  name: "popup",
  reducers: {
    setIsSeen: (state, action: PayloadAction<boolean>) => {
      state.isSeen = action.payload;
    },
  },
});

export default popupSlice.reducer;

export const { setIsSeen } = popupSlice.actions;

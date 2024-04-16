import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ModalStateType {
  isOpen: boolean;
  states: any;
  modalContent: React.ReactElement | null;
}

const initialState: ModalStateType = {
  isOpen: false,
  modalContent: null,
  states: {},
};

const modalslice = createSlice({
  initialState,
  name: "modal",
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ modalContent: React.ReactElement }>
    ) => {
      state.modalContent = action.payload.modalContent;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalContent = null;
    
    },
    setModalState: (state, action: PayloadAction<{ value: any }>) => {
      state.states = action.payload.value;
    },
    clearModalState: (state) => {
      state.states = {};
    },
  },
});

export default modalslice.reducer;

export const { clearModalState, closeModal, openModal, setModalState } =
  modalslice.actions;

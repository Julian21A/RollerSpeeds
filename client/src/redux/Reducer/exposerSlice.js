import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentIndex: 0,
  images: [
    require("../../assets/exposerPics/patinador1.jpg"),
    require("../../assets/exposerPics/patinador2.jpg"),
    require("../../assets/exposerPics/patinador3.jpg"),
    require("../../assets/exposerPics/patinador4.jpg"),
    require("../../assets/exposerPics/patinador5.jpg"),
  ],
};

export const exposerSlice = createSlice({
  name: 'exposer',
  initialState,
  reducers: {
    nextImage: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.images.length;
    }
  },
});

export const { nextImage, prevImage } = exposerSlice.actions;

export default exposerSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./HomeSlice";

const store = configureStore({
  reducer: {
    Home: homeSlice,
  },
});

export default store;

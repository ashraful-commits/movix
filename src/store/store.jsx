import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";

const store = configureStore({
  reducer: {
    Home: homeSlice,
  },
});

export default store;

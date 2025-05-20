import { configureStore } from "@reduxjs/toolkit";
import  gsapSlice  from "./gsap/gsap";
export const store = configureStore({
  reducer: {
    gsap: gsapSlice,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

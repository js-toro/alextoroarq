import { configureStore } from "@reduxjs/toolkit";
import scrollSlice from "@/infrastructure/persistence/slice/scrollSlice";

export const store = configureStore({
	reducer: {
		scroll: scrollSlice,
	},
});

export type IRootState = ReturnType<typeof store.getState>;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IScrollState } from "@/domain/entities";
import { Category } from "@/domain/enums";

const initialState: IScrollState = {
	scroll: 0,
	category: Category.Untracked,
};

const scrollSlice = createSlice({
	name: "scroll",
	initialState,
	reducers: {
		setScroll: (state, action: PayloadAction<IScrollState>) => {
			state.scroll = action.payload.scroll;
			state.category = action.payload.category;
		},
	},
});

export const { setScroll } = scrollSlice.actions;
export default scrollSlice.reducer;

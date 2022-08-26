import { createSlice } from '@reduxjs/toolkit';

export const merchSlice = createSlice({
    name: "merches",
    initialState: {
        selectedCategory: "COVER SETS/ BLANKETS"
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const getSelectedCategory = state => state.merches.selectedCategory;
export const {filterCategory} = merchSlice.actions;
export default merchSlice.reducer;
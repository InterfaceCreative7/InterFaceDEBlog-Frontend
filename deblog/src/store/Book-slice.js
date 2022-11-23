import { createSlice } from "@reduxjs/toolkit";

const BookSlice = createSlice({
    name: "Book",
    initialState: {
        check: true
    },
    reducers: {
        checkBook(state) {
            state.check = !state.check
        }
    }
});

export const BookActions = BookSlice.actions;
export default BookSlice.reducer;
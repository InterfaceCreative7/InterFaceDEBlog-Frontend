import { configureStore } from "@reduxjs/toolkit"
import BookReducer from "./Book-slice.js";


const store = configureStore({
    reducer: { book: BookReducer }
});

export default store
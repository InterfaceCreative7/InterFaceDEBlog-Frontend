import { configureStore } from "@reduxjs/toolkit"
import BookReducer from "./Book-slice.js";
import PostReducer from "./post-slice.js"

const store = configureStore({
    reducer: { book: BookReducer, post: PostReducer }
});

export default store
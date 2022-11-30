import { createSlice } from "@reduxjs/toolkit";


const PostSlice = createSlice({
    name: "post",
    initialState: {
        body: "",
        title: ""
    },
    reducers: {
        submitPost(state, action) {
            state.body = action.payload.body
            state.title = action.payload.title

        }
    }
})

export const PostActions = PostSlice.actions;
export default PostSlice.reducer;
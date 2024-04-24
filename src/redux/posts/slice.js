import {createSlice} from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { addPostsThunk, deletePostsThunk, fetchPosts, updatePostsThunk } from './operations'

const initialState = {
    posts: [],
    loading: false,
    error: null,
    page: 1,
}

export const slice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

        addPost: (state, action) =>{
            const isExist = state.posts.findIndex(post => post.title === action.payload.title)
            if (isExist === -1) {
                state.posts.push(action.payload)
            }else {
toast.error(`Post with title: ${action.payload.title} is exist`)
            }
            
        },


    // --------------------
        deletePost: (state, action) =>{
            state.posts = state.posts.filter(post => post.id !== action.payload)
        },

    // -----------------
    updatePosts: (state, action) =>{
        state.posts = state.posts.map(item => item.id === action.payload.id ? action.payload : item)
    }
    
},
extraReducers: builder => {
    builder
    .addCase(fetchPosts.fulfilled, (state, action) =>{
        state.posts.push(...action.payload)
        state.loading = false
    }, )
    .addCase(fetchPosts.pending, (state, action) =>{
        
        state.loading = true
        state.error = null
    }, )
    .addCase(fetchPosts.rejected, (state, action) =>{
        state.error = action.error.message
        state.loading = false
    },)
    .addCase(addPostsThunk.fulfilled, (state, action) =>{
        state.posts.push(action.payload)
        state.loading = false
    },)
    .addCase(addPostsThunk.pending, (state, action) =>{
        
        state.loading = true
        state.error = null
    }, )
    .addCase(addPostsThunk.rejected, (state, action) =>{
        state.error = action.payload
        state.loading = false
    },)
    .addCase(deletePostsThunk.fulfilled, (state, action) =>{
        state.posts = state.posts.filter(post => post.id !== action.payload.id)
        state.loading = false
    },)
    .addCase(deletePostsThunk.pending, (state, action) =>{
        
        state.loading = true
        state.error = null
    }, )
    .addCase(deletePostsThunk.rejected, (state, action) =>{
        state.error = action.payload
        state.loading = false
    },)
    .addCase(updatePostsThunk.fulfilled, (state, action) =>{
        state.posts = state.posts.map(item => item.id === action.payload.id ? action.payload : item)
        state.loading = false
    },)
    .addCase(updatePostsThunk.pending, (state, action) =>{
        
        state.loading = true
        state.error = null
    }, )
    .addCase(updatePostsThunk.rejected, (state, action) =>{
        state.error = action.payload
        state.loading = false
    },)
}

})

export const postsReducer = slice.reducer
export const {  addPost, deletePost,  updatePosts} = slice.actions
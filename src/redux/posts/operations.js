import axios from "axios";
// import { addPost, deletePost,isError, isFetching, updatePosts } from "../../redux/posts/slice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// axios.defaults.baseURL = "https://6536b8babb226bb85dd28cc5.mockapi.io/adverts/"; // baseURL для всіх екземплярів axios, тому бажано його не використовувати, а використовувати instance
const  posts = axios.create({
    baseURL: 'https://6536b8babb226bb85dd28cc5.mockapi.io/adverts/'
})

export const fetchPosts = createAsyncThunk('fetchPosts', async (_, thunkAPI) => {
    const res = await posts.get('posts')
   if(res.statusText !== 'OK'){
    return thunkAPI.rejectWithValue('Smth went wrong')
   }
    return res.data
})
    
export const addPostsThunk = createAsyncThunk('addPosts', async (body, thunkAPI) => {
const postsList = thunkAPI.getState().postsRed.posts
const item = postsList.find(post => post.title === body.title)
if (item) {
    toast.error(`Post with title: ${body.title} is exist`)
    return thunkAPI.rejectWithValue('Post is exist')
}
    try {
        const {data} =  await  posts.post('posts', body)
        return data
            } catch (error){
            return thunkAPI.rejectWithValue(error.message)
            }

})

export const deletePostsThunk = createAsyncThunk('deletePosts', async (id, thunkAPI) => {
    try {
        const {data} =  await  posts.delete(`posts/${id}`)
        return data
            } catch (error){
            return thunkAPI.rejectWithValue(error.message)
            }

})

export const updatePostsThunk = createAsyncThunk('updatePosts', async (body, thunkAPI) => {
    try {
        const {data} = await  posts.put(`posts/${body.id}`, body)
        return data
            } catch (error){
            return thunkAPI.rejectWithValue(error.message)
            }

})
// export const fetchPosts = () => async(dispatch) => {
//     try {
//         dispatch(isFetching())
//         const {data} =  await  axios.get('posts')
//         dispatch(getPosts(data))
//     } catch (error){
// dispatch(isError(error.message))
//     }
// }
// ------------------------------
// export const addPostsThunk= (body) => async(dispatch) => {
//     try {
//         dispatch(isFetching(true))
//         const {data} = await  axios.post('posts', body)
        
//         dispatch(addPost(data))
        
//     } catch (error){
// dispatch(isError(error.message))
//     } finally {
//         dispatch(isFetching(false))
//     }

// }
// // -----------------------------------------------
// export const deletePostsThunk= id => async(dispatch) => {
//     try {
        
//         const {data} = await  axios.delete(`posts/${id}`)
        
//         dispatch(deletePost(data.id))
        
//     } catch (error){
// dispatch(isError(error.message))
//     } finally {
//         dispatch(isFetching(false))
//     }

// }
// // ---------------------------------
// export const updatePostsThunk= (body) => async(dispatch) => {
   
       
//         const {data} = await  axios.put(`posts/${body.id}`, body)
//         console.log(data);
//         dispatch(updatePosts(data))
        
    

// }
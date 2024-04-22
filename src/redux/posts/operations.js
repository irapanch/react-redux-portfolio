import axios from "axios";
import { addPost, deletePost, getPosts, isError, isFetching, updatePosts } from "../../redux/posts/slice";

axios.defaults.baseURL = "https://6536b8babb226bb85dd28cc5.mockapi.io/adverts/"; // baseURL для всіх екземплярів axios, тому бажано його не використовувати, а використовувати instance

export const fetchPosts = () => async(dispatch) => {
    try {
        dispatch(isFetching())
        const {data} =  await  axios.get('posts')
        dispatch(getPosts(data))
    } catch (error){
dispatch(isError(error.message))
    }
}
export const addPostsThunk= (body) => async(dispatch) => {
    try {
        dispatch(isFetching(true))
        const {data} = await  axios.post('posts', body)
        
        dispatch(addPost(data))
        
    } catch (error){
dispatch(isError(error.message))
    } finally {
        dispatch(isFetching(false))
    }

}
export const deletePostsThunk= id => async(dispatch) => {
    try {
        
        const {data} = await  axios.delete(`posts/${id}`)
        
        dispatch(deletePost(data.id))
        
    } catch (error){
dispatch(isError(error.message))
    } finally {
        dispatch(isFetching(false))
    }

}
export const updatePostsThunk= (body) => async(dispatch) => {
   
       
        const {data} = await  axios.put(`posts/${body.id}`, body)
        console.log(data);
        dispatch(updatePosts(data))
        
    

}
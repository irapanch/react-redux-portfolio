import React from "react";
import { Card } from "./Posts.styled";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProviderContext";
import {useDispatch} from 'react-redux'
// import { deletePost } from "../../redux/posts/slice";
import { deletePostsThunk, updatePostsThunk } from "../../redux/posts/operations";


export const SinglePost = ({ id, title, body }) => {
  const {theme} =  useContext(ThemeContext)
  const dispatch = useDispatch()
const handleDelete = () => {
  dispatch(deletePostsThunk(id))
}
const handleUpdate = () => {
  dispatch(updatePostsThunk({id, body, title: 'THUNK' }))
}
  return (
    <Card onClick={handleUpdate} $bg={theme}>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={handleDelete}>Delete</button>
    </Card>
  );
};

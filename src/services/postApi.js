import axios from "axios";

// axios.defaults.baseURL = "https://dummyjson.com/"; // baseURL для всіх екземплярів axios, тому бажано його не використовувати, а використовувати instance

const postInstance = axios.create({
  baseURL: "https://dummyjson.com/",
});

export const fetchPosts = async (params) => {
  try {
    const { data } = await postInstance.get("/posts", {
      // всі пости йдуть не через axios.get, а через instance
      params: {
        ...params,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchPostsByQuery = async (params) => {
  try {
    const { data } = await postInstance.get("/posts/search", {
      params: {
        ...params,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getPostsByUserId = async (id) => {
  try {
    const { data } = await postInstance.get(`/posts/user/${id}`);
    return data.posts;
  } catch (error) {
    return error.message;
  }
};

export const getPostsByQuery = async (query) => {
  try {
    const { data } = await postInstance.get(`/posts/search?q=${query}`);
    return data.posts;
  } catch (error) {
    return error.message;
  }
};

export const getPostsById = async (postId) => {
  try {
    const { data } = await postInstance.get(`/posts/${postId}`);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getPostComments = async (postId) => {
  try {
    const { data } = await postInstance.get(`/posts/${postId}/comments`);
    return data.comments;
  } catch (error) {
    return error.message;
  }
};
import { types } from "./typesConsts";

export const setLoading = loading => ({
    type: types.SET_LOADING,
    payload: loading,
})

export const setPosts = data => ({
    type: types.SET_POSTS,
    payload: data,
})

export const setLimitValue = limit => ({
    type: types.SET_LIMIT,
    payload: limit,
})

export const nextPage = () => ({
    type: types.NEXT_PAGE,
   
})

export const changeQuery = (query) => ({
    type: types.CHANGE_QUERY,
    payload: query,
   
})
//  cтворення RTK Query
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6536b8babb226bb85dd28cc5.mockapi.io/adverts'
    }),
    endpoints: (builder) => ({
        fetchTodos: builder.query({
            query: () => 'todos',
        }),
    }),
})

export const {useFetchTodosQuery} = todoApi
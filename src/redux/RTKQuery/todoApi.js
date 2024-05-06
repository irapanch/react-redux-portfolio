//  cтворення RTK Query
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
    tagTypes: ['todos'],
    reducerPath: 'todoApi',
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6536b8babb226bb85dd28cc5.mockapi.io/adverts'
    }),
    endpoints: (builder) => ({
        fetchTodos: builder.query({
            query: () => 'todos',
            providesTags:['todos']
        }),
        addTodos: builder.mutation({
            query: body =>( {
                url: 'todos',
                method: 'POST',
                body,
            }),
        invalidatesTags: ['todos']
        }),
        deleteTodo: builder.mutation({
            query: id =>( {
                url: `todos/${id}`,
                method: 'DELETE',
         }),
         invalidatesTags: ['todos'],
        }),
        toggleTodo: builder.mutation({
            query: body =>( {
                url: `todos/${body.id}`,
                method: 'PUT',
                body: {...body, completed: !body.completed}
         }),
         invalidatesTags: ['todos'],
        }),

    }),
})

export const {useToggleTodoMutation, useFetchTodosQuery, useAddTodosMutation, useDeleteTodoMutation} = todoApi
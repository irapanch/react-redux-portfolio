import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "react-toastify"
import { fetchAllTodos } from "services/todoApi"


export const useTodos = () => {
    const queryClient = useQueryClient()
    const {
          data = [],
         isLoading,
          isError} = useQuery({
        queryFn: fetchAllTodos, // imported by Api services/
        queryKey: ['todos'],})
          
       
       
    const {mutate: addTodo} =  useMutation({
      mutationFn: async (body) => {
        const {data} = await axios.post(`https://6536b8babb226bb85dd28cc5.mockapi.io/adverts/todos/`, body)
      return data
      }, 
      onSuccess: () => {
        toast.success('You added todo')
        queryClient.invalidateQueries(['todos'])
      },
    })
       return {data, isLoading, isError, addTodo}
}

 
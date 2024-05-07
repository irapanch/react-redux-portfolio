import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "react-toastify"


export const useTodos = () => {
    const {
        data = [],
         isLoading,
          isError} = useQuery({
        queryFn: async () => {
          const {data} = await axios.get('https://6536b8babb226bb85dd28cc5.mockapi.io/adverts/todos')
        return data
        }, 
        queryKey: ['todos'],
          
       })
       const queryClient = useQueryClient()
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

 
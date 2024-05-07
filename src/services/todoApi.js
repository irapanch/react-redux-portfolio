import axios from "axios"

 export const fetchAllTodos = async (params) => {
    const {data} = await axios.get('https://6536b8babb226bb85dd28cc5.mockapi.io/adverts/todos', {
        params: {
            limit: 3,
            page: 1,
            ...params
        }
    },)
  return data
  }
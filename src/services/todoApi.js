import axios from "axios"

 export const fetchAllTodos = async () => {
    const {data} = await axios.get('https://6536b8babb226bb85dd28cc5.mockapi.io/adverts/todos?page=1&limit=3')
  return data
  }
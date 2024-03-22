import axios from "axios"

export const getAllUsers = async() => {
    const {data} = await axios.get('https://dummyjson.com/users')
    return data.users
}

// await axios.get(`https://dummyjson.com/users/${id}`)
export const getUserById = async(id) => {
    const {data} = await axios.get(`https://dummyjson.com/users/${id}`)
    return data
}

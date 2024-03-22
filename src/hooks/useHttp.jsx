import axios from "axios"
import { useEffect, useState } from "react"
import { getAllUsers } from "../services/userApi"

// унікальний універсальний хук, який буде приймати функцію, і робити якусь логіку
export const useHttp = (fn, params) => { // fn=getAllUsers,  приходить з  User, як const {data: users, loading, error} = useHttp(getAllUsers)
  const [data, setData] = useState([])
  const [loading, setLoading] =useState(false)
  const [error, setError] = useState(null)
  useEffect(()=>{
      
      const getData = async ()=> {
        setLoading(true)
          try {
              const res= await fn(params) // fn=getAllUsers, (params)- передаються, якщо приходять params
              setData(res)
              setLoading(false)
          } catch (error){
              setError(error.message)
              setLoading(false)
  
          } 
  
      }
      getData() 
      



  }, [fn, params]) //params- передаються, якщо приходять params
  return {data, loading, error}
}


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getAllUsers } from '../services/userApi'
import { useHttp } from '../hooks/useHttp'

const Users = () => {
    const {data: users, loading, error} = useHttp(getAllUsers) // власний хук useHttp використовується для заміни шматка коду нижче ----- отримання user ----

    // // ----- отримання users ---- 
    // const [users, setUsers] = useState([])
    // const [loading, setLoading] =useState(false)
    // const [error, setError] = useState(null)
    // useEffect(()=>{
    //     setLoading(true)
    //     const getData = async ()=> {
    //         try {
    //            const data= await getAllUsers()
    //             setUsers(data)
    //             setLoading(false)
    //         } catch (error){
    //             setError(error.message)
    //             setLoading(false)
    
    //         } 
    
    //     }
    //     getData() 
        



    // }, [])
  return (
    <div><h2>Users Page</h2>
    {loading && <h2>Loading...</h2> }
    {error && <h2>Smth went wrong... Try again!</h2>}
    <StyledList >
        {users?.map(({id, firstName, lastName}) => (<li key={id}>
            <Link to={id.toString()}>{firstName} {lastName}</Link>
            
            </li>))}
    </StyledList>
    </div>
  )
}

const StyledList = styled.ol`
    font-size: 1.5rem;
    display: grid;
    gap: 10px;
`
export default Users
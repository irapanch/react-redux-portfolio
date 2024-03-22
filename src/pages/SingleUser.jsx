import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { useHttp } from '../hooks/useHttp';
import { getUserById } from '../services/userApi';
import { StyledLink } from '../components/Navbar';

const SingleUser = () => {
    // const params = useParams()  ---- хук для витягування параметрів з SingleUser path="users/:id
    const {id} = useParams() // деструктуризація з params
    console.log(id);

    const {data: user, loading, error} = useHttp(getUserById, id) // власний хук useHttp використовується для заміни шматка коду нижче ----- отримання user 

    const navigate = useNavigate() // хук для переміщення вперед/назад по сторінкам

    // ------ отримання user 
    // const [user, setUser] = useState({})
    // const [loading, setLoading] =useState(false)
    // const [error, setError] = useState(null)
    // useEffect(()=>{
    //     setLoading(true)
    //     const getData = async ()=> {
    //         try {
    //             const { data } = await axios.get(`https://dummyjson.com/users/${id}`)
    //             setUser(data)
    //             setLoading(false)
    //         } catch (error){
    //             setError(error.message)
    //             setLoading(false)
    
    //         } 
    
    //     }
    //     getData() 
        



    // }, [id])
    //  ------------
  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={() => navigate('/')}>Go HOME</button>
      <button onClick={() => navigate('/about')}>Go about</button>

        <h2>User - {user.firstName}</h2>
        <hr />
        <div>
            <img src={user.image} alt={user.firstName}/>
            <h3>Name: {user.firstName}</h3>
            <h3>Surname: {user.lastName}</h3>
            <h3>Email: {user.email}</h3>
            <h3>Age: {user.age}</h3>
            <hr />
            <h2>User info address:</h2>
            {user.address &&   <h3> {user.address.city}</h3>}
            {/* або використати: */}
            {/* <h3> {user.address?.city}</h3> */}       
        </div>
        {/* або використати перевірку: */}
        {/* {user.length !== 0 && (<div>
            <img src={user.image} alt={user.firstName}/>
            <h3>Name: {user.firstName}</h3>
            <h3>Surname: {user.lastName}</h3>
            <h3>Email: {user.email}</h3>
            <h3>Age: {user.age}</h3>
            <hr />
            <h2>User info address:</h2>                   
            <h3> {user.address.city}</h3>
            
        </div>)} */}

        {/* --------- вкладені маршрути--------- */}
        <div>
          <StyledLink to='address'>show address</StyledLink>
          <StyledLink to='posts'>show posts</StyledLink>
        </div>
        <Suspense fallback={<h2>waiting...</h2>}>
 {/* --- нижчеб в <Outlet/> відтворюється контент вкладених маршрутів---- */}
 <Outlet/>
        </Suspense>
       
    </div>
  )
}

export default SingleUser
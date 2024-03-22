import React, { useState } from 'react'

import { Posts } from '../components/Posts/Posts'
import { useHttp } from '../hooks/useHttp'
import { getPostsByQuery } from '../services/postApi'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

// const PostsPage = () => {
   
//   return (
//    <Posts/>
//   )
// }

// export default PostsPage

const PostsPage = () => {
  const {
    register,
    handleSubmit
  } = useForm()
  
  const submit = (data) => {
   
    setSearchParams(data.queryStr ? {query: data.queryStr } : {})
  }

  const[searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('query' )  || ''
  const {data} = useHttp(getPostsByQuery, query )
    
    console.log(query);
    const location = useLocation()
  return (
    <>
    <form onSubmit={handleSubmit(submit)}>
      <input {...register('queryStr')} type='text'/>
      <button>Search</button>
    </form>
    <ol>
        {data?.map(post => (
            <li key={post.id}>
              <Link state={{from: location}} to={post.id.toString()}><h2>{post.title}</h2></Link>
               
            </li>))}
    </ol>
    </>
    
  )
}

export default PostsPage
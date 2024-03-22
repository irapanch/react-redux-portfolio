import React from 'react'
import { useParams } from 'react-router-dom'
import { useHttp } from '../hooks/useHttp'
import { getPostComments } from '../services/postApi'

const Comments = () => {
    const {postId} = useParams()
    const {data = []} = useHttp(getPostComments, postId)
  return (
    <>
    <h2>Comments by postID</h2>
    <hr/>
    <ul>
        {data?.map(comment => (
            <li key={comment.id}>
                {comment.body}
            </li>
        ))}
    </ul>
    </>
    
  )
}

export default Comments
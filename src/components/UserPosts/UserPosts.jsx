import React, { useState } from 'react'
import { useHttp } from '../../hooks/useHttp'
import { getPostsByUserId } from '../../services/postApi'
import { useParams } from 'react-router-dom'
import { useToggle } from '../../hooks/useToggle'
import Modal from '../Modal/Modal'

const UserPosts = () => {
    const {id} = useParams()
    const {data} = useHttp(getPostsByUserId, id )
    const {toggle, isOpen} = useToggle()
const [post, setPost] = useState(null)
    const getOnePost = id => {
        const item = data.find(item => item.id === id)
setPost(item)
toggle()
    }
   

  return (
    <div>
        <ol>
            {data?.map(item => (
                <li key={item.id} onClick={()=> getOnePost(item.id)}>{item.title}</li>
            ))}
            {isOpen && <Modal close={toggle}>
                <h2>{post?.title}</h2>
                <p>{post?.body}</p>

                </Modal>}
        </ol>
    </div>
  )
}

export default UserPosts
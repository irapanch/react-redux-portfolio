import React, {  useEffect   } from "react";
import { Header } from "./Header";
import { PostList } from "./PostList";
// import { fetchPosts } from "../../services/postApi";
import { WrapperPosts } from "./Posts.styled";
import { Button } from "./Button";

import { useDispatch, useSelector} from "react-redux";


// import { getPosts } from "../../redux/posts/slice";
import Form from "./Form";
import { fetchPosts } from "../../redux/posts/operations";


export const Posts = () => {

const dispatch = useDispatch()
useEffect(()=> {
//   fetchPosts().then(res =>  dispatch(getPosts(res)))
dispatch(fetchPosts())
}, [dispatch])

const posts = useSelector(state => state.postsRed.posts)
console.log(posts );


  return (
    <div>
      <Header/>
      <Form/>
      <WrapperPosts>
        <h1>You query is:  </h1>
        
          <PostList posts={posts} />
       

        <Button onClick={() => alert("Hello")} className="big" $bg="teal">
          Example
        </Button>
        <Button disabled={'loading'}  $bg="gray">
        Load more
        </Button>
      </WrapperPosts>
    </div>
  );
}

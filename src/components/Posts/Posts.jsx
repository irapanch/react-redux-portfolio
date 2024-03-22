import React, {  useEffect,  useReducer,  useRef,   } from "react";
import { Header } from "./Header";
import { PostList } from "./PostList";
import { fetchPosts, fetchPostsByQuery } from "../../services/postApi";
import { WrapperPosts } from "./Posts.styled";
import { Button } from "./Button";
import { toast } from "react-toastify";
import { initialState, postReduser } from "../../redusers/postReduser";

import { changeQuery, nextPage, setLimitValue, setLoading, setPosts } from "../../redusers/actions";


export const Posts = () => {




const [state, dispatch] = useReducer(postReduser,initialState)

const{posts, limitValue, skip, loading, query} = state




//+++ ------------------------------------------------
const firstRender = useRef(true)
const countOfRenders = useRef(0) // для підрахунку рендерів на сторінці
useEffect(()=>{

  countOfRenders.current +=1
  console.log('кількість рендерів: ', countOfRenders.current);
  // -------- cancel first render
  if (firstRender.current){
    console.log('тут ми відмінили виконання ефекта при першому рендері');
    firstRender.current = false
    return
  }
  console.log('render');
})
// +++ -------------------------------------------------

useEffect(() => {
  const getPostsFn = async(fnType) => {
   dispatch(setLoading(true))
    try {
      const { posts, limit } = await fnType({
        limit: limitValue,
        skip,
        q: query,
      }); 
      dispatch(setPosts(posts))
      // setPosts(prev => [...prev, ...posts])
      // setLimitValue(limit)
      dispatch(setLimitValue(limit))
    } catch (error) {
      alert(error.message);
    } finally {
      toast.success("You data is ready!");
     
      dispatch(setLoading(false))
    }
  }

  if (query) {
    getPostsFn(fetchPostsByQuery)
  } else {
    getPostsFn(fetchPosts)
  }

}, [ limitValue, skip, query])

  const handleLoadMore = () => {
   
    // setSkip( prev => prev + limitValue )
    dispatch(nextPage(posts))
  };
  const handleChangeQuery = (queryStr) => {
    dispatch(changeQuery(queryStr))
   
    // setQuery(queryStr)
    // setPosts([])
  };
  return (
    <div>
      <Header onChangeQuery={handleChangeQuery} />
      <WrapperPosts>
        <h1>You query is: {query} </h1>
        {loading && !posts.length ? (
          <h1>Loading...</h1>
        ) : (
          <PostList posts={posts} />
        )}

        <Button onClick={() => alert("Hello")} className="big" $bg="teal">
          Example
        </Button>
        <Button disabled={loading} onClick={handleLoadMore} $bg="gray">
          {loading ? "Loading..." : "Load more"}
        </Button>
      </WrapperPosts>
    </div>
  );
}
// export default class Posts extends Component {
//   state = {
//     posts: [],
//     limit: 2,
//     skip: 0,
//     loading: false,
//     error: null,
//     query: "",
//   };
//   async componentDidMount() {
//     this.setState({ loading: true });
    // try {
    //   const { posts, limit } = await fetchPosts({
    //     limit: this.state.limit,
    //     skip: this.state.skip,
    //   }); // деструктуризація постів з data
    //   this.setState((prev) => ({ posts: [...prev.posts, ...posts], limit }));
    // } catch (error) {
    //   alert(error.message);
    // } finally {
    //   toast.success("You data is ready!");
    //   this.setState({ loading: false });
    // }
//   }
//   async componentDidUpdate(prevProps, prevState) {
//     const { skip, query } = this.state;
//     if (prevState.skip !== skip && !query) {
//       this.setState({ loading: true });
//       try {
//         const { posts } = await fetchPosts({
//           limit: this.state.limit,
//           skip: this.state.skip,
//         }); // деструктуризація постів з data
//         this.setState((prev) => ({ posts: [...prev.posts, ...posts] }));
//         toast.info(`You add to your posts ${this.state.limit} elems!`);
//       } catch (error) {
//         alert(error.message);
//       } finally {
//         this.setState({ loading: false });
//       }
//     }
//     if (query && (prevState.query !== query || prevState.skip !== skip)) {
//       this.setState({ loading: true });
//       try {
//         const { posts } = await fetchPostsByQuery({
//           limit: this.state.limit,
//           skip: this.state.skip,
//           q: query,
//         });
//         this.setState((prev) => ({ posts: [...prev.posts, ...posts] }));
//         toast.info(`You add to your posts ${this.state.limit} elems!`);
//       } catch (error) {
//         alert(error.message);
//       } finally {
//         this.setState({ loading: false });
//       }
//     }
//   }
  // handleLoadMore = () => {
  //   this.setState((prev) => ({ skip: prev.skip + prev.limit }));
  // };
  // handleChangeQuery = (queryStr) => {
  //   this.setState({ query: queryStr, posts: [] });
  // };
//   render() {
//     const { posts, loading, query } = this.state;
//     return (
//       <div>
//         <Header onChangeQuery={this.handleChangeQuery} />
//         <WrapperPosts>
//           <h1>You query is: {query} </h1>
//           {loading && !posts.length ? (
//             <h1>Loading...</h1>
//           ) : (
//             <PostList posts={posts} />
//           )}

//           <Button onClick={() => alert("Hello")} className="big" $bg="teal">
//             Example
//           </Button>
//           <Button disabled={loading} onClick={this.handleLoadMore} $bg="gray">
//             {loading ? "Loading..." : "Load more"}
//           </Button>
//         </WrapperPosts>
//       </div>
//     );
//   }
// }

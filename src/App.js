import React, { lazy } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
// import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Users from "./pages/Users";
import SingleUser from "./pages/SingleUser";
import UserPosts from "./components/UserPosts/UserPosts";
import PostsPage from "./pages/PostsPage";
import SinglePostPage from "./pages/SinglePostPage";
// import Comments from "./components/Comments";
// import useAuth from "./hooks/useAuth";
import Login from "./components/Login/Login";
import PrivateRoute from "./routes/PrivateRoute";
import { ColorPicker } from "./components/ColorPicker/ColorPicker";
// import { MyContext } from "./context/ContextProvider";
// import Login from "./components/Login/Login";
// import { Counter } from "./components/Counter/Counter.jsx";
// import Component1 from "./components/Component1.jsx";
// import { FlexContainer } from "./components/Counter/Counter.styled";
// import RegisterForm from "./components/RegisterForm/RegisterForm";
// import { StyledFlex } from "./styledComponents/StyledFlex";
// import { ThemeContext } from "./context/ThemeProviderContext";

// import LoginFormik from "./components/Login/LoginFormik";
// import LoginHookForm from "./components/Login/LoginHookForm";
// import { Employee } from "./components/Employees/Employee";
// import {Posts} from "./components/Posts/Posts";
// import { TodoList } from "./components/TodoList/TodoList";

// Для код-сплітінга(розділення сторінок на окремі чанки) в lazy є сенс кидати тільки ті частини коду, в яких багато інформації на великих проєктах. Для розгрузки bundler й швидшого завантаження першої сторінки.
// lazy працює у зв'язці з Suspense, що огортає Outlet
const About = lazy(() => import('./pages/About'))
const Comments = lazy(() => import('./components/Comments'))

const App = () => {

  return   (
<>

<Routes>
  <Route path="/" element={<Layout/>}>
     <Route  index element={<HomePage/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path="posts" element={<PostsPage/>}/>
        <Route path="posts/:postId" element={<SinglePostPage/>}>
          <Route path="comments" element={<PrivateRoute><Comments/></PrivateRoute>}/>
        </Route>        
     <Route path="users" element={<Users/>}/>
        <Route path="users/:id" element={<SingleUser/>}>  
          <Route path="address" element={<h2>User address</h2>}/>
          <Route path="posts" element={<UserPosts/>}/>
        </Route>
        <Route path="colorPicker" element={<ColorPicker/>}/> 
    <Route path="test" element={<Navigate to='/'/>}/>
  </Route>
  
  <Route path="*" element={<PageNotFound/>}/>

</Routes>
</>
  

  )


};

export default App;

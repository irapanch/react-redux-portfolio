import { StyledButton } from "../Counter/Counter.styled";
import { StyledInput, StyledTodo, StyledTodoList } from "./TodoList.styled";
import { Flex } from "../../styles/GlobalStyles";
import React, { useEffect, useReducer} from "react";
import Modal from "../Modal/Modal";
import { AnimatePresence } from "framer-motion";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, clearSelectedTodo, clearTodos, deleteTodo, toggleTodo } from "../../redux/todoList/actions";
import { toast } from "react-toastify";
import AddForm from "./AddForm";

const textAnimateFromLeft = {
  //   framer-motion
  hidden: (custom) => ({
    // opacity: 0,
    x: custom,
  }),
  isVisible: {
    // opasity: 1,
    x: 0,
    transition: {
      duration: 0.1,
    },
  },
  exit: {
    x: "500%",
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const TodoList = () => {
const  todos = useSelector(state => state.todos)
const dispatch = useDispatch()

const handleDelete = (id) => {
    dispatch(deleteTodo(id))
    toast.success('You deleted todo') 
  };

  const handleAdd = (title) => {
    dispatch(addTodo(title))
      
    };

    const handleToggleTodo = (id) => {
      // setTodos((prev) =>  prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item
      //   )))
        dispatch(toggleTodo(id))
    
    };

    

const handleClearTodo = () => {
 
  dispatch(clearTodos()) 
};

const handleClearComplitedTodos = () => {
  dispatch(clearSelectedTodo()) 
};

// useEffect(()=>{
//   const fetchTodos = async () => {
//     try {
//       const { data } = await axios.get("https://dummyjson.com/todos", {
//         // деструктуризація з res
//         params: {
//           limit: limit,
//         },
//       });
//       // setTodos( data.todos );
//       //--5. використовуємо замість setTodos( data.todos )
//       dispatch({type: 'SET_TODOS', payload: data.todos})
//     } catch (error) {
//       alert(error.message);
//     }
//   }
//   fetchTodos()

// }, [limit])

// const handleChangeLimit = (limit) => {
//   // setLimit(limit );
//   dispatch({type: 'CHANGE_LIMIT', payload: limit})
// };

// const handleDelete = (id) => {
//   // setTodos((prev) => prev.filter((item) => item.id !== id))
//   dispatch({type: 'DELETE_TODO', payload: id}) // логіку (prev) => prev.filter((item) => item.id !== id)передаємо в самому світчу
// };


// const handleChangeInput = (e) => {
//   // setCurrentText(e.target.value)
//   dispatch({type: 'CHANGE_TODO', payload: e.target.value})
 
// };


// const toggleModal = () => {
//   // setIsOpen(prev => !prev)
//   dispatch({type: 'TOGGLE_MODAL' }) 
  
// };
// const toggleModalSecond = () => {
//   // setIsOpenSecondModal(prev => !prev);
//   dispatch({type: 'TOGGLE_MODAL_SECOND' }) 
// };
// const fetchRandom = () => {
//   axios
//     .get("https://dummyjson.com/todos/random")
//     // .then((res) => setTodos( [res.data] ));
//     .then(({data}) => dispatch({type: 'GET_RANDOM', payload: [data]}) );
// };

  return (
    <>
    <AddForm addTodo={handleAdd}/>
    <StyledButton
          // onClick={toggleModal}
          >Open Modal</StyledButton>
      {/* {isOpen && (
        <Modal close={toggleModal}>
          <button onClick={toggleModalSecond}>Open modal 2</button>
          {isOpenSecondModal && (
            <Modal close={toggleModalSecond}>
              Modal Second{" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda perspiciatis consequuntur modi voluptas, repellendus
                eum vero cupiditate commodi quia vitae, ipsum, architecto
                distinctio possimus omnis? Possimus odit magni minus eveniet.
              </p>
            </Modal>
          )}
        </Modal>
      )} */}
      <StyledTodoList>
        
        {/* <select
          // value={limit}
          // onChange={(e) => handleChangeLimit(e.target.value)}
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select> */}
        {/* <button onClick={fetchRandom}>Get random TODO</button> */}
        <AnimatePresence    mode="sync">
          {todos.map((item, idx) => (
            <StyledTodo
              initial="hidden"
              whileInView="isVisible"
              custom={ "100%"}
              // custom={idx % 2 === 0 ? "-100%" : "100%"}
              variants={textAnimateFromLeft}
              whileHover={{ rotate: 2 }}
              exit="exit"
              viewport={{ once: true }}
              key={item.id}
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleToggleTodo(item.id)}
              />
              <span>{item.todo}</span>
              <StyledButton
                onClick={() => handleDelete(item.id)}
                size="18px"
              >
                Delete
              </StyledButton>
            </StyledTodo>
          ))}
        </AnimatePresence >
        <StyledButton 
        $border={4} 
        onClick={handleClearComplitedTodos}
        >
          Clear selected todos
        </StyledButton>
        <StyledButton 
        $border={4} onClick={handleClearTodo}
        >
          Clear all todos
        </StyledButton>
      </StyledTodoList>
    </>
  );
}

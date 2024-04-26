import { StyledButton } from "../Counter/Counter.styled";
import {  StyledTodo, StyledTodoList } from "./TodoList.styled";

import React  from "react";

import { AnimatePresence } from "framer-motion";

import AddForm from "./AddForm";
import { useTodoList } from "hooks/useTodoList";
import Filter from "components/Filter/Filter";

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
const { todos,  handleDelete, handleAdd, handleToggleTodo, handleClearTodo, handleClearComplitedTodos, setFilter} = useTodoList()



  return (
    <>
    <AddForm addTodo={handleAdd}/>
   <Filter setFilter={setFilter}/>
      <StyledTodoList>
       
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
                onChange={() => handleToggleTodo(item)}
              />
              <span>{item.title}</span>
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


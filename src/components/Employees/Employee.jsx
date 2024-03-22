import React, {  useEffect, useState } from "react";
import { styled } from "styled-components";
import EmployeeList from "./EmployeeList";
import { EmployeesFilter } from "./EmployeesFilter";
import userData from "./../../assets/users.json";
import { getFilteredData } from "../../helpers/getFilteredData";
import Modal from "../Modal/Modal";



export const Employee = () => {

  const [users, setUsers] = useState(userData)
  const [filterStr, setFilterStr] = useState('')
  const [isAvailable, setIsAvailable] = useState(false)
  const [activeSkill, setActiveSkill] = useState('all')
  const [isOpenModal, setIsOpenModal] = useState(false)
//   componentDidMount() {
//     console.log("MOUNT");
//     const items = window.localStorage.getItem("USERS");
//     console.log(JSON.parse(items));
//     if (JSON.parse(items)?.length) {
//       this.setState({ users: JSON.parse(items) });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.users !== this.state.users) {
//       window.localStorage.setItem("USERS", JSON.stringify(this.state.users));
//     }
//   }
useEffect(()=>{
  const items = JSON.parse(window.localStorage.getItem("USERS"));
  if (items?.length) {
    setUsers(items);
        }
}, [])

useEffect(()=>{
  window.localStorage.setItem("USERS", JSON.stringify(users));
}, [users])

const handleDeleteUser = (id) => {
    setUsers(prev => prev.filter((user) => user.id !== id))

  };
  const handleChangeFilter = (filterStr) => {
     setFilterStr(filterStr);
  };
  const handleChangeAvailable = () => {
    setIsAvailable((prev) =>  !prev)
    
  };
  const handleChangeSkill = (activeSkill) => {
    setActiveSkill(activeSkill)
  };

  const toggleModal = () => {
    setIsOpenModal(prev => !prev)
    
  };
  const filteredData = getFilteredData(
    users,
    filterStr,
    isAvailable,
    activeSkill
  );

  return (
    <Wrapper>
      <EmployeesFilter
        activeSkill={activeSkill}
        setActiveSkill={handleChangeSkill}
        isAvailable={isAvailable} 
        toggleIsAvailable={handleChangeAvailable} 
        filterStr={filterStr}
        setFilter={handleChangeFilter}
        toggleModal={toggleModal} 
      />
      <EmployeeList
        users={filteredData}
        onDeleteUser={handleDeleteUser}
      />
      {isOpenModal && ( 
        <Modal close={toggleModal}>
    
          <h1>Обери товар</h1>
        </Modal>
      )}
    </Wrapper>
  );
  
} 

// export class Employee extends Component {
//   state = {
//     users: userData,
//     filterStr: "",
//     isAvailable: false, // ----------1 створили стан
//     activeSkill: "all",
//     isOpenModal: false, // ++++++++ 1 створили стан
//   };

//   componentDidMount() {
//     console.log("MOUNT");
//     const items = window.localStorage.getItem("USERS");
//     console.log(JSON.parse(items));
//     if (JSON.parse(items)?.length) {
//       this.setState({ users: JSON.parse(items) });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.users !== this.state.users) {
//       window.localStorage.setItem("USERS", JSON.stringify(this.state.users));
//     }
//   }

  // handleDeleteUser = (id) => {
  //   // const newUsers = this.state.users.filter((user) => user.id !== id);
  //   // this.setState({ users: newUsers });

  //   this.setState((prev) => ({
  //     users: prev.users.filter((user) => user.id !== id),
  //   }));
  // };
  // handleChangeFilter = (filterStr) => {
  //   this.setState({ filterStr });
  // };
  // handleChangeAvailable = () => {
  //   this.setState((prev) => ({ isAvailable: !prev.isAvailable })); // ==== 1 cтворили функцію перемикання
  // };
  // handleChangeSkill = (activeSkill) => {
  //   this.setState({ activeSkill });
  // };

  // toggleModal = () => {
  //   //+++++++++++ 2 cтворили функцію відкриття/закриття модалки
  //   this.setState((prev) => ({ isOpenModal: !prev.isOpenModal }));
  // };
//   render() {
//     const {
//       users,
//       filterStr,
//       isAvailable,
//       activeSkill,
//       isOpenModal, // +++++ 6 передаємо стан , чи включена модалка
//     } = this.state; //------2 підготували стан для передачі
    // const filteredData = getFilteredData(
    //   users,
    //   filterStr,
    //   isAvailable,
    //   activeSkill
    // );
//     return (
//       <Wrapper>
//         <EmployeesFilter
//           activeSkill={activeSkill}
//           setActiveSkill={this.handleChangeSkill}
//           isAvailable={isAvailable} //-------2 передали стан
//           toggleIsAvailable={this.handleChangeAvailable} //======== 2 передали функцію
//           filterStr={filterStr}
//           setFilter={this.handleChangeFilter}
//           toggleModal={this.toggleModal} //++++++++ 3 передали функцію відкриття/закритття модалки
//         />
//         <EmployeeList
//           users={filteredData}
//           onDeleteUser={this.handleDeleteUser}
//         />
//         {isOpenModal && ( // +++++ 7 відмальовка модалки за умовою. Відмалювати, якщо стан isOpenModal true
//           <Modal close={this.toggleModal}>
//             {/* +++++++ 8 передаємо пропс на ЗАКРИТТЯ модалки */}
//             <h1>Обери товар</h1>
//           </Modal>
//         )}
//       </Wrapper>
//     );
//   }
// }

const Wrapper = styled.div`
  background-color: lightgray;
`;

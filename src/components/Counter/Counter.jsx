import React, { useEffect, useReducer, useRef } from "react";
// import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Flex,
  FlexContainer,
  StyledButton,
  StyledCounter,
} from "./Counter.styled";
import Btn from "./Btn";

export const Counter = () => {



  // const [counter, setCounter] = useState(0) // значення й функція для зміни цього значення (як в setState)
  // const [step, setStep] = useState(1)

  const initialState = {
    counter: 0,
    step: 1,
  }

  const counterReduser = (state, action) => { // в action може бути (type, payload)
    console.log(action);
    switch (action.type){
      case 'INCREMENT' :
        return {
          ...state,
          counter: state.counter + state.step,
        }
        case 'DECREMENT' :
        return {
          ...state,
          counter: state.counter - state.step,
        }
        case 'RESET' :
        return {
          ...state,
          counter: 0,
          step: 1,
        }
        case 'SET_STEP':
          return {
            ...state,
            step: action.payload,
          }
      default:
        return state
    }
      }

      const [state, dispatch] = useReducer(counterReduser,initialState)

//------- потребує мемоізації useMemo(() {використовують при великих об'ємах даних на великих циклах, коли повертається результат, наприклад фільтація, пошук інклуд}
// useMemo(() запам'ятовує результат виконання ф-ї
  // const sum = value => {
  //   console.log('Calc SOME DATA');
  //   for (let i = 1; i< 10000000000; i++){
     
  //   }
  //   return value * 2
  // }
// const result = sum(step)

// const result = useMemo(()=>{ //-- виконай функцію, а значення змінюй лише тоді, якщо зміниться [step]
//   return sum(step)
// }, [step])
//---------//end memo==============



  // ------------------ для підрахунку рендерів на сторінці
  const countOfRenders = useRef(0) // для підрахунку рендерів на сторінці

useEffect(()=>{

  countOfRenders.current +=1
  console.log('кількість рендерів: ', countOfRenders.current);

})
// ----------------//
  
  // useEffect(()=>{
  //   console.log('Hello counter');
  // }, [])

  // useEffect(()=>{
  //   if( counter > 3) {
  //     console.log('STOP');
  //   }
   
  // }, [counter])
  // useEffect(()=>{
  //   console.log('Counter or step was changed');
   
  // }, [counter, step])

  const increment = () => {
 dispatch({type: 'INCREMENT'}) // - це action, те що ми відправляємо в об'єкт counterReduser (state, action)
   
  };
  const decrement = () => {
    dispatch({type: 'DECREMENT'})
    
  };
  const reset = () => {
    dispatch({type: 'RESET'})
    
  };
  const handleChangeStep = (e) => {
    dispatch({type: 'SET_STEP', payload: +e.target.value})
    

    
  };
  return(
    <FlexContainer>
    <StyledCounter>
     
      <h1>{state.counter}</h1>
      <input type="text" value={state.step} onChange={handleChangeStep} />
      <Flex>
        <StyledButton onClick={decrement}> minus</StyledButton>
        <StyledButton onClick={reset}>reset</StyledButton>
        <StyledButton onClick={increment}>plus</StyledButton>
        {state.counter > 3 && <Btn counter={state.counter} />}
      </Flex>
    </StyledCounter>
  </FlexContainer>
  )
}

// export class Counter extends React.Component {
//   static defaultProps = {
//     title: "Default props for component",
//   };
//   state = {
//     counter: 0,
//     step: 1,
//     loading: false,
//   };

//   componentDidMount() {
//     console.log("Counter is ready to work");
//     setTimeout(() => {
//       console.log("Hello");
//     }, 3000);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // prevProps можна замінити _,    prevProps отримує попередні пропси, що прокидуються в компонент
//     console.log("Counter update");
//     if (this.state.counter === 5) {
//       alert("Counter equal 5");
//     }
//     console.log(prevState);
//   }
//   increment = () => {
//     // setState з колбеком, котрий йде після виконання зміни
//     // this.setState({ counter: this.state.counter + 1 }, () => {
//     //   console.log(this.state.counter);
//     // });
//     this.setState((prevState) => ({
//       counter: prevState.counter + prevState.step,
//     }));
//   };
//   decrement = () => {
//     this.setState((prevState) => ({
//       counter: prevState.counter - prevState.step,
//     }));
//   };
//   reset = () => {
//     this.setState({ counter: 0, step: 1 });
//   };
//   handleChangeStep = (e) => {
//     // this.setState({ step: Number(e.target.value) });
//     this.setState({ step: +e.target.value });
//   };
//   render() {
//     const { title } = this.props;
//     const { counter, step } = this.state;

//     return (
//       <FlexContainer>
//         <StyledCounter>
//           <h4>{title}</h4>
//           <h1>{counter}</h1>
//           <input type="text" value={step} onChange={this.handleChangeStep} />
//           <Flex>
//             <StyledButton onClick={this.decrement}> minus</StyledButton>
//             <StyledButton onClick={this.reset}>reset</StyledButton>
//             <StyledButton onClick={this.increment}>plus</StyledButton>
//             {counter > 3 && <Btn counter={this.state.counter} />}
//           </Flex>
//         </StyledCounter>
//       </FlexContainer>
//     );
//   }
// }

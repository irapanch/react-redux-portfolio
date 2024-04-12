import { decrement, increment, reset, setStep } from "./actions"
import {createReducer} from '@reduxjs/toolkit'
const initialState = {
    counter: 0,
    step: 1,
}

// Рефакторінг на тулкітс
export const counterReducer = createReducer(initialState, (builder)=> {
    builder.addCase(increment,(state, action)=>{
        state.counter = state.counter + state.step
    })
    .addCase(decrement,(state, action)=>{
        state.counter = state.counter - state.step
    })
    .addCase(reset,(state, action)=>{
        state.step= 1;
        state.counter= 0;
    })
    .addCase(setStep,(state, action)=>{
        state.step=  action.payload
    })
} )

// export const counterReduser = (state = initialState, action) => {
//     switch(action.type) {
//         case increment.type: return {
//             ...state,
//             counter: state.counter + state.step,
//         }
//         case reset.type: return {
//             ...state,
//             step: 1,
//             counter: 0,
//         }
//         case decrement.type: return {
//             ...state,
//             counter: state.counter - state.step,
//         }
//         case setStep.type: return {
//             ...state,
//             step:  action.payload,
//         }

//         default:
//             return state
//     }
// }


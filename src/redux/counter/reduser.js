import { decrement, increment, reset, setStep } from "./actions"

const initialState = {
    counter: 0,
    step: 1,
}
export const counterReduser = (state = initialState, action) => {
    switch(action.type) {
        case increment.type: return {
            ...state,
            counter: state.counter + state.step,
        }
        case reset.type: return {
            ...state,
            step: 1,
            counter: 0,
        }
        case decrement.type: return {
            ...state,
            counter: state.counter - state.step,
        }
        case setStep.type: return {
            ...state,
            step:  action.payload,
        }

        default:
            return state
    }
}
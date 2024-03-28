import { DECREMENT, INCREMENT, RESET, SET_STEP } from "./constants"

const initialState = {
    counter: 1,
    step: 1,
}
export const counterReduser = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT: return {
            ...state,
            counter: state.counter + state.step,
        }
        case RESET: return {
            ...state,
            step: 1,
            counter: 0,
        }
        case DECREMENT: return {
            ...state,
            counter: state.counter - state.step,
        }
        case SET_STEP: return {
            ...state,
            step:  action.payload,
        }

        default:
            return state
    }
}
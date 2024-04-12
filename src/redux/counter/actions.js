// import { DECREMENT, INCREMENT,  RESET, SET_STEP } from "./constants";
import {createAction} from '@reduxjs/toolkit'
// export const increment = () => ({type: INCREMENT})
// export const reset = () => ({type: RESET})
// export const decrement = () => ({type: DECREMENT})
// export const setStep = (payload) => ({type: SET_STEP, payload})

// рефакторінг га редакс-тулкітс.  Папка з константами вже не потрібна
export const increment = createAction('increment')
export const reset = createAction('reset')
export const decrement = createAction('decrement')
export const setStep = createAction('setStep')



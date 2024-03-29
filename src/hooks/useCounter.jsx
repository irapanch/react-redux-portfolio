import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { decrement, increment, reset, setStep } from "../redux/counter/actions"

export const useCounter = () => {
    const counter = useSelector(state => state.counter)
  const step = useSelector(state => state.step)

	const dispatch = useDispatch()

	const handleUpdateStep = e => {
		dispatch(setStep(+e.target.value))
	}
	const resetCounter = () => {
		dispatch(reset())
		toast.info('Reset data!')
	}
	const handleMinus = () => {
		dispatch(decrement())
	}
	const handlePlus = () => {
		dispatch(increment())
	}

	return { handleMinus, handlePlus, resetCounter, handleUpdateStep, counter, step }
}
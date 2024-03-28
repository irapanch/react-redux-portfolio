import { useDispatch, useSelector } from 'react-redux'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import { decrement, increment, reset, setStep } from '../../redux/counter/actions'
import { toast } from 'react-toastify'


export const Counter = () => {
  const counter = useSelector(state => state.counter)
  const step = useSelector(state => state.step)
  const dispatch = useDispatch()
  const handleMinus = () =>{
	dispatch(decrement())
  }
  const handleReset = () =>{
	dispatch(reset())
	toast.info('Reset data!')
  }
  const handleUpdateStep = (e) => {
	dispatch(setStep(+e.target.value))
  }
	return (
		<FlexContainer>
			<StyledCounter>
				<h1>{counter}</h1>

				<input type='text' value={step} onChange={handleUpdateStep}/>
				<Flex>
					<StyledButton onClick={handleMinus}>minus</StyledButton>
					<StyledButton onClick={handleReset}>reset</StyledButton>
					<StyledButton onClick={()=> dispatch(increment())}>plus</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}
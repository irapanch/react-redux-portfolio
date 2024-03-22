import React, { useContext } from 'react'
import { MyContext } from '../App'

const Component2 = () => {
    const context = useContext(MyContext) // хук useContext приймає контекст напряму з APP
  return (
    <div>Component2
        <h2>I have {context.auto}</h2> 
        {/* або зробити деструктуризацію const{auto} =  useContext(MyContext)
        й застосувати 
        <h2>I have {auto}</h2>  */}
    </div>
  )
}

export default Component2
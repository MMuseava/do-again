import React, { useState } from 'react'
import CustomInput from '../../components/customInput/CustomInput'
import "./simpleCalculator.style.css"


const SimpleCalculator = () => {

    const [numOne, setNumOne] = useState(0)
    const [numTwo, setNumTwo] = useState(0)
    const [total, setTotal] = useState(0)
    const [currentSymbol, setCurrentSymbol] = useState("+")
    

    const calcTotal = (numOne, numTwo, symbol) => {
        let total = 0
        switch (symbol) {
            case "+":
                total = numOne + numTwo;
                break;
            case "-":
                total = numOne - numTwo;
                break;
            case "/":
                total = numOne / numTwo;
                break;
            case "*":
                total = numOne * numTwo;
                break;
            default:
                break;
        }
        return total;
    }

    const onNumOneChange = (e) => {
     
            setNumOne(e.target.value)
        setTotal(
            calcTotal(parseInt(numTwo) , parseInt(e.target.value),currentSymbol))
      
    }
    const onNumTwoChange = (e) => {
       
            setNumTwo(e.target.value)
            setTotal(
            calcTotal(parseInt(numOne) , parseInt(e.target.value),currentSymbol))
        
    }
    const onSymbolChange = (e) => {
        setCurrentSymbol(e.target.value)
         setTotal(
            calcTotal(parseInt(numOne) , parseInt(numTwo),e.target.value))
    }

  return (
      <div className='simple-calculator'>
          <CustomInput
              type={"number"}
              value={numOne}
              onChangeHandler={onNumOneChange}
          />
          {/* <h1>+</h1> */}
          <select onChange={onSymbolChange}>
              <option value= {"+"}>Plus</option>
              <option value= {"-"}>Subtract</option>
              <option value= {"/"}>Divide</option>
              <option value= {"*"}>Multiple</option>
          </select>
          <CustomInput
              type={"number"}
              value={numTwo}
              onChangeHandler={onNumTwoChange}
          />
          <h1>=</h1>
          <h1>{total }</h1>
    </div>
  )
}

export default SimpleCalculator
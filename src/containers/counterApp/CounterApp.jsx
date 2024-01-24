import React, { useState } from 'react'
import "./counterApp.style.css"
import CustomButton from '../../components/customButton/CustomButton'

const CounterApp = () => {
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)

    const onPlusHandler = () => {
    setCount(count +1)
}
    const onMinusHandler = () => {
        if (count > 0) {
            setCount(count - 1)
            
        }
    }
    
    const onAddHandler = () => {
        setTotal(total + count)
        setCount(0)
    }
    
    const onTotalMinus = () => {
        setTotal(total - count)
    }

    const onMultipleHandler = () => {
        setTotal(total * count)
    }
  return (
      <div className='counter-container'>
          <div>
          <CustomButton text="+" onClickHandler={onPlusHandler} />
          <p>{ count}</p>
              <CustomButton text="-" onClickHandler={onMinusHandler} />

              <CustomButton text="ADD" onClickHandler={onAddHandler} />
              <p>{ total}</p>

          </div>
          <div>
              <CustomButton text="minus" onClickHandler={onTotalMinus}/>
              <CustomButton text="*" onClickHandler={onMultipleHandler}/>
          </div>
    </div>
  )
}

export default CounterApp
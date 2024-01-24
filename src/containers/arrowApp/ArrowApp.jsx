import React, { useState } from 'react'
import CustomButton from '../../components/customButton/CustomButton'

import "./arrowApp.style.css"

const ArrowApp = () => {
    const [isUp, setIsUp] = useState(true)
    
    const onUpHandler = () => {
    setIsUp(!isUp)
}

    // const onDownHandler = () => {
    //     setIsUp(false)
    // }

  return (
      <div>
          <div className='buttons'>
              <CustomButton text={isUp ? "Down" : "up"} onClickHandler={onUpHandler}/>
              {/* <CustomButton text="Down" onClickHandler={onDownHandler}/> */}
          </div>
          <div className='arrow-box'>
              <p>{ isUp ? "⬆️" : "⬇️"}</p>
          </div>
    </div>
  )
}

export default ArrowApp
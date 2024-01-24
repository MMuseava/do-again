import React from 'react'


const CustomInput = ({onChangeHandler, type, value}) => {
  return (
      <div>
          <input
              type={type}
              value={value}
              onChange={onChangeHandler}
              placeholder='0'
          
          />
    </div>
  )
}

export default CustomInput
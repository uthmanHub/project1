import React from 'react'

const Button = ({text, action}) => {
  return (
     <p className='rate_button' onClick={action}><a href='#'> {text} </a></p>
  )
}

export default Button

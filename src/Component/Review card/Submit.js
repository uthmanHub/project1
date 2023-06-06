import React from 'react'

const Submit = ({text, action}) => {
    return (
      <p onClick={action} className='submit1' ><a > {text} </a></p>
    )
  }

export default Submit
//  href='#1'

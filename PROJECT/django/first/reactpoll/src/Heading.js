import React from 'react'

function Heading() {
  return (
    <div className="heading"  style={{
      marginBottom: "2rem",
      padding: "3rem",
      backgroundColor: "rgb(231, 231, 221)",
      width: "70%",
      boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
    }}>
    <h1  className='sm:text-3xl sm:font-bold'>Flywieight Polls</h1>
  </div>
  )
}

export default Heading
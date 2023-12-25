import React from 'react'

function Heading() {
  return (
    <div className="heading md:w-[600px] w-[400px]"  style={{
      marginBottom: "2rem",
      padding: "3rem",
      backgroundColor: "rgb(231, 231, 221)",
      
      boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
    }}>
    <h1  className='text-2xl sm:text-3xl font-bold'>Flywieight Polls</h1>
  </div>
  )
}

export default Heading
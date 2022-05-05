import React from 'react'

function Counter({increment}) {
    console.log("2 render")
  return (
    <button style={{zIndex: "1000000"}}onClick={increment}>+1</button>
  )
}

export default Counter
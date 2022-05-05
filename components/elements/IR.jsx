import React from 'react'

function IR({amount}) {
  return (
    <span>
        {Number(amount).toLocaleString('fa-ir')} {" ت"}
    </span>
  )
}

export default IR
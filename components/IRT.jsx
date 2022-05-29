import React from 'react'

function IRT({amount}) {
  return (
    <span>
        {Number(amount).toLocaleString('fa-ir')} {" ت"}
    </span>
  )
}

export default IRT
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
function AddToCardButton() {
  return (
    <div className="cursor-pointer" role="button">
        <AddCircleIcon color="error" sx={{ fontSize: 40 }}/>
    </div>
  )
}

export default AddToCardButton
import { Box, TextField } from '@mui/material'
import React from 'react'

function DetailedInput({
    
}) {
  return (
      <>
        <Box>
            
            <TextField
                required
                label="تلفن همراه"
                type="text"
                variant="outlined"
                fullWidth
                helperText="تلفن همراه باید به نام صاحب غرفه باشه"
                placeholder="0912***1245"
                inputProps={{
                    dir: "ltr"
                }}
                name="mobile"
            />
        </Box>
    </>
  )
}

export default DetailedInput
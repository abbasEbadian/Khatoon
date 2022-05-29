import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function SetCombinationAmount({open, setOpen, handleChange}) {
  const [value, setValue] = React.useState("")
  const change = (e)=>{
    setValue(e.target.value)
  }
  const handleClose = () => {
    setOpen(false);
  };
  const onConfirm = (e) => {
    if(handleChange)handleChange(value)
    handleClose()
  };
  

  return (
    <div>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>تعیین تعداد</DialogTitle>
        <DialogContent>
          <DialogContentText>
            مقدار مورد نظر :
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="number"
            fullWidth
            variant="standard"
            value={value}
            onChange={change}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>لغو</Button>
          <Button onClick={onConfirm}>تایید</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

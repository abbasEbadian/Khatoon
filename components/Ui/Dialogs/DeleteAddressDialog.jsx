import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({open, onClick, handleClose}) {
 
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>{"آیا از حذف این آدرس اطمینان دارید؟"}</DialogTitle>
       
        <DialogActions>
          <Button onClick={handleClose}>بستن</Button>
          <Button onClick={onClick} variant="contained" color="error">حذف</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

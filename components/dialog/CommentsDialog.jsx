import React from 'react'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import {TextField,Button,Box,IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  
export default function CommentsDialog({item_id,isopen,answer}) {
    const [open, setOpen] = React.useState(isopen);
    const [text, setText] = React.useState("");
    const [errormessage, seterrormessage] = React.useState({
      text:'',
      error:false,
    });

  
  const handleClose = () => {
    setOpen(false);
  };

 
 
 const handleSubmit=(event)=>{
     if(text.length===0 || text===" "){
       seterrormessage({text:'این فیلد باید دارای مقدار باشد',error:false})
     }
 }
  return (

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{overflow:'hidden'}}
      >
        {answer?
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          پاسخ خود را ثبت کنید
      </BootstrapDialogTitle>
        :
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        پرسش خود را در مورد این محصول ثبت کنید
      </BootstrapDialogTitle>
        }
        <DialogContent dividers sx={{width:500}}>
            <div className='container px-3 pb-4'>       
               {answer ? 
               <div>
                <small>{answer}</small>
               </div>
                :
                <div></div>}
                {answer ? 
               <div>
                  <TextField label=" متن پاسخ" multiline rows={4} error={errormessage.texterror} helperText={errormessage.text} value={text} onChange={(event)=>{setText(event.target.value)}} fullWidth variant="outlined" className='mb-3'/>
                  <div className='mt-2'>
                    <Button variant="contained" style={{width:'100%',borderRadius:'50px',backgroundColor:'#df443d'}} size="large" onClick={handleSubmit} fullWidth >ثبت پاسخ</Button>
                  </div> 
               </div>
                :
                <div>
                  <TextField label=" متن پرسش" multiline rows={4} error={errormessage.texterror} helperText={errormessage.text} value={text} onChange={(event)=>{setText(event.target.value)}} fullWidth variant="outlined" className='mb-3'/>
                  <div className='mt-2'>
                    <Button variant="contained" style={{width:'100%',borderRadius:'50px',backgroundColor:'#df443d'}} size="large" onClick={handleSubmit} fullWidth >ثبت پرسش</Button>
                  </div> 
                </div>}
                                      
              </div>
        </DialogContent>
        
      </BootstrapDialog>
  )
}

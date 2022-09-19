import React from 'react'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import {TextField,Button,Box,IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import DelIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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
  
export default function StandpointDialog({product_id}) {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    overflowY:'auto',overflowX:'hidden',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#fff',
    borderRadius: 3,
  };
  const [data,setData]=React.useState({
    score:0,
    title:"",
    text:"",
    hide:false,
    positive:[],
    negative:[],
  });
  
  const [posdata,setPosdata]=React.useState([]);
  const [negdata,setNegdata]=React.useState([]);
  const [scoretext, setscoretext] = React.useState("بدون امتیاز");
  const [positivevalue,setPositivevalue]=React.useState("");
  const [negativevalue,setNegativevalue]=React.useState("");

  const [error, seterror] = React.useState({
    pos:false,
    neg:false,
    titleerror:false,
    texterror:false,
    postext:"",
    negtext:"",
    text:"",
    title:""
  })
  
  const handleClickPos=(value)=>(event)=>{
    if(value!==""){
      if(posdata.includes(value)){
        seterror({pos:true,postext:"کلمه موردنظر قبلا وارد شده است"});
      }else{
        setPosdata([...posdata,value]);
        setPositivevalue("");
      }
    }
    else{
      seterror({pos:true,postext:"حداقل باید یک کلمه وارد کنید"});
    }

  }
  const handleRemovePos = (idx)=>(event)=> {
    const temp = [...posdata];
    temp.splice(idx, 1);
    setPosdata(temp);
  }
  const handleClickNeg =(value)=>(event)=>{
    if(value!==""){
      if(negdata.includes(value)){
        seterror({neg:true,negtext:"کلمه موردنظر قبلا وارد شده است"});
      }else{
        setNegdata([...negdata,value]);
        setNegativevalue("");
      }
    }
    else{
      seterror({pos:true,postext:"حداقل باید یک کلمه وارد کنید"});
    }

  }
  const handleRemoveNeg = (idx)=>(event)=> {
    const temp = [...negdata];
    temp.splice(idx, 1);
    setNegdata(temp);
  }

 
  const handlePosChange=(event)=>{
     setPositivevalue(event.target.value);
     seterror({pos:false,postext:""})
  }
  const handleNegChange=(event)=>{
    setNegativevalue(event.target.value);
    seterror({neg:false,negtext:""})
 }
 const handleScore=(event)=>{
   const scores=['بدون امتیاز','خیلی بد','بد','معمولی','خوب','عالی'];
   setData({score:event.target.value});
   for(let i =0; i<scores.length;i++){
    if(event.target.value===i){
      setscoretext(scores[i]);
    }
   }
 }
 const handleCheckValues=()=>{
  if(data.title==-""){
    seterror({title:'عنوان نظر را وارد کنید',titleerror:true});
  }
  if(data.text==-""){
    seterror({text:'متن نظر را وارد کنید',texterror:true});
  }
  if(data.positive==[]){
    seterror({postext:' نکات مثبت را وارد کنید',pos:true});
  }
  if(data.negative==[]){
    seterror({negtext:' نکات منفی را وارد کنید',neg:true});
  }
 }
 const handleSubmit=()=>{
     handleCheckValues();
 }
  return (
    <div>
      <p>شما هم می توانید دیدگاه و تجربه خود را ثبت کنید</p>
      <Button variant="contained" style={{backgroundColor:'#df443d',borderRadius:"50px"}} fullWidth onClick={handleClickOpen}>
       ثبت دیدگاه
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{overflow:'hidden'}}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          دیدگاه خود را ثبت کنید
        </BootstrapDialogTitle>
        <DialogContent dividers>
            <div className='container px-3 pb-4 row'>
              <div className='px-5'>
              <div className='px-4 text-center'>
                <h5>امتیاز بدهید: {data.score}</h5>
               <Slider color="main" defaultValue={0} onChange={handleScore} step={1}  min={0} max={5} />

               </div>
              </div>
               
              <TextField label="عنوان نظر" color="main" value={data.title} error={error.titleerror} helperText={error.title} onChange={(event)=>{setData({title:event.target.value})}} fullWidth variant="outlined" className='mb-3'/>

                <TextField label="نکات مثبت" color="main" error={error.pos} helperText={error.postext} value={positivevalue} onChange={handlePosChange} fullWidth variant="outlined" className='mb-3'
                InputProps={{endAdornment: (
                <IconButton position="end" color="success"  onClick={handleClickPos(positivevalue)}>
                  <AddIcon fontSize='large'/>
                </IconButton>
                )}}
                />
                <div className='row pb-1'>
                  {posdata.map((item,idx)=>(
                   <div className='col-lg-5 col-12 d-flex justify-content-between border border-success rounded-3 m-1' key={idx}>
                      <div>
                        <IconButton color="success">
                        <CheckIcon/>
                        </IconButton>
                      </div>
                      <p className='mt-1'>{item}</p>
                      <div>
                        <IconButton onClick={handleRemovePos(idx)}>
                          <DelIcon/>
                        </IconButton>
                      </div>
                   </div>
                  ))}
                </div>
                <TextField label="نکات منفی" color="main" error={error.neg} helperText={error.negtext} value={negativevalue} onChange={handleNegChange} fullWidth variant="outlined" className='mb-3'
                InputProps={{endAdornment: (
                <IconButton position="end" color="error" onClick={handleClickNeg(negativevalue)}>
                  <AddIcon fontSize='large'/>
                </IconButton>
                )}}
                />
               <div className='row pb-1'>
                  {negdata.map((item,idx)=>(
                   <div className='col-lg-5 col-12 d-flex justify-content-between border border-danger rounded-3 m-1' key={idx}>
                   <div>
                     <IconButton color="error">
                     <CloseIcon/>
                     </IconButton>
                   </div>
                   <p className='mt-1'>{item}</p>
                   <div>
                     <IconButton onClick={handleRemoveNeg(idx)}>
                       <DelIcon/>
                     </IconButton>
                   </div>
                </div>
                  ))}
                </div>
                <TextField label=" متن نظر" color="main" multiline rows={3} error={error.texterror} helperText={error.text} value={data.text} onChange={(event)=>{setData({text:event.target.value})}} fullWidth variant="outlined" className='mb-3'/>
                <div className='mt-2'>
                <FormGroup>
                  <FormControlLabel control={<Checkbox color="main" checked={data.hide} onChange={(event)=>{setData({hide:event.target.checked})}} />} label="دیدگاه من بصورت ناشناس باشد" />
                </FormGroup>
                <Button variant="contained" onClick={handleSubmit} style={{width:'100%',borderRadius:'50px',backgroundColor:'#df443d'}} size="large" fullWidth >ثبت دیدگاه</Button>

              </div>                       
              </div>
        </DialogContent>
        
      </BootstrapDialog>
    </div>
  )
}

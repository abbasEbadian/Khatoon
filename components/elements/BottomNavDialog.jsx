import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {useSelector} from 'react-redux';
import Link from 'next/link'
import { Collapse, ListItemIcon } from '@mui/material';
import BottomNavItemCollapse from './BottomNavItemCollapse';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BottomNavDialog({open, setOpen}) {
    const cats = useSelector(s=>s.main.categories)
    const [categories, setCategories] = React.useState([])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

React.useEffect(()=>{
    setCategories(cats)
}, [cats])
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
            <small className='px-2'> دسته بندی ها</small>
          </Toolbar>
        </AppBar>
        <BottomNavItemCollapse  item={{categories}}/>
      </Dialog>
    </div>
  );
}

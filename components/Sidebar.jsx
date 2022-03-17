import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../styles/Header.module.css'
import Image from 'next/image'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);



  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={e=>setOpen(false)}
      onKeyDown={e=>setOpen(false)}
      p={2}
    >
        
        <div className="d-flex justify-content-between align-items-center">
            <Image src={'/images/logo/logo.png'} width={100} height={30} alt="logo"/>
            <CloseIcon onClick={e=>setOpen(false)} className="cursor-pointer"/>
        </div>
      <List className="mt-4">
       
        <ListItem button dir="ltr" a >
            <ListItemText primary={"ورود / ثبت نام"} className="text-start "/>
        </ListItem>
     
      </List>
      <Divider />
      <List>
        
          <ListItem button>
            <ListItemText primary={"محصولات"} className="text-start " />
          </ListItem>

          <ListItem button>
            <ListItemText primary={"غرفه ها"} className="text-start " />
          </ListItem>          

          <ListItem button>
            <ListItemText primary={"وبلاگ"} className="text-start " />
          </ListItem>

          <ListItem button>
            <ListItemText primary={"پشتیبانی"} className="text-start " />
            <ListItemText primary={"021-25857"} className="text-end "/>
          </ListItem>
     
      </List>
    </Box>
  );

  return (
    <div>
    <Button onClick={e=>setOpen(true)} className={styles.headerSidebarToggler}><MenuIcon /></Button>
      <Drawer
            anchor={"right"}
            open={open}
            onClose={e=>setOpen(false)}
          >
            {list("right")}
        </Drawer>
    </div>
  );
}

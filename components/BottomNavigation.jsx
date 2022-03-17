import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import styles from '../styles/Header.module.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import BottomNavDialog from './elements/BottomNavDialog';
export default function BottomNavigation2() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ width: "100%" }} className={styles.bottomNavigation}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
      >
        <BottomNavigationAction label="خانه" icon={<HomeRoundedIcon />} />
        <BottomNavigationAction label="دسته بندی ها" icon={<CategoryRoundedIcon />} onClick={e=>setOpen(true)} />
        <BottomNavigationAction label="پروفایل" icon={<PersonRoundedIcon />} />
      </BottomNavigation>
      <BottomNavDialog open={open} setOpen={setOpen} />
    </Box>
  );
}

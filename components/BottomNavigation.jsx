import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import styles from '../styles/Header.module.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import BottomNavDialog from './elements/BottomNavDialog';
import Link from 'next/link'
import { Typography } from '@mui/material';

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
        <Link href={"/"}>
          <a className='d-flex flex-column align-items-center'>
            <BottomNavigationAction  icon={<HomeRoundedIcon />} label="خانه" sx={{padding: "6px 12px 8px"}} />
          </a>
        </Link>
        <BottomNavigationAction label="دسته بندی ها" icon={<CategoryRoundedIcon />} onClick={e=>setOpen(true)} />

        <Link href={"/dashboard"}>
          <a className='d-flex flex-column align-items-center'>
            <BottomNavigationAction  icon={<PersonRoundedIcon />} label="پروفایل" sx={{padding: "6px 12px 8px"}}/>
          </a>
        </Link>

      </BottomNavigation>
      <BottomNavDialog open={open} setOpen={setOpen} />
    </Box>
  );
}

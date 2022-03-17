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

import Link from 'next/link'
import { Collapse, ListItemIcon } from '@mui/material';
import BottomNavItemCollapse from './BottomNavItemCollapse';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BottomNavDialog({open, setOpen}) {

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [categories, setCategories] = React.useState([
    {id: 1, name: "", persian_name: "مواد غذایی", categories: [
        {id: 1, name: "", persian_name: "مواد غذایی 1", categories: [
            {id: 1, name: "", persian_name: "مواد غذایی 1"},
            {id: 1, name: "", persian_name: "مواد غذایی 2"},
            {id: 1, name: "", persian_name: "مواد غذایی 3"},
        ]},
        {id: 1, name: "", persian_name: "مواد غذایی 2", categories: [
            {id: 1, name: "", persian_name: "مواد غذایی 1"},
            {id: 1, name: "", persian_name: "مواد غذایی 2"},
            {id: 1, name: "", persian_name: "مواد غذایی 3"},
        ]},
        {id: 1, name: "", persian_name: "مواد غذایی 3", categories: [
            {id: 1, name: "", persian_name: "مواد غذایی 1"},
            {id: 1, name: "", persian_name: "مواد غذایی 2"},
            {id: 1, name: "", persian_name: "مواد غذایی 3"},
        ]},
    ]},
    {id: 2, name: "", persian_name: "مد و پوشاک", categories: [
        {id: 1, name: "", persian_name: "مد و پوشاک 1",categories: [
        {id: 1, name: "", persian_name: "مد و پوشاک 1"},
        {id: 1, name: "", persian_name: "مد و پوشاک 2"},
        {id: 1, name: "", persian_name: "مد و پوشاک 3"},
    ]},
        {id: 1, name: "", persian_name: "مد و پوشاک 2",categories: [
        {id: 1, name: "", persian_name: "مد و پوشاک 1"},
        {id: 1, name: "", persian_name: "مد و پوشاک 2"},
        {id: 1, name: "", persian_name: "مد و پوشاک 3"},
    ]},
        {id: 1, name: "", persian_name: "مد و پوشاک 3",categories: [
        {id: 1, name: "", persian_name: "مد و پوشاک 1"},
        {id: 1, name: "", persian_name: "مد و پوشاک 2"},
        {id: 1, name: "", persian_name: "مد و پوشاک 3"},
    ]},
    ]},
    {id: 3, name: "", persian_name: "خانه و آشپزخانه", categories: [
        {id: 1, name: "", persian_name: "خانه و آشپزخانه 1",categories: [
        {id: 1, name: "", persian_name: "خانه و آشپزخانه 1"},
        {id: 1, name: "", persian_name: "خانه و آشپزخانه 2"},
        {id: 1, name: "", persian_name: "خانه و آشپزخانه 3"},
    ]},
        {id: 1, name: "", persian_name: "خانه و آشپزخانه 2",categories: [
        {id: 1, name: "", persian_name: "خانه و آشپزخانه 1"},
        {id: 1, name: "", persian_name: "خانه و آشپزخانه 2"},
        {id: 1, name: "", persian_name: "خانه و آشپزخانه 3"},
    ]},
        {id: 1, name: "", persian_name: "خانه و آشپزخانه 3",categories: [
        {id: 1, name: "", persian_name: "خانه و آشپزخانه 1"},
        {id: 1, name: "", persian_name: "خانه و آشپزخانه 2"},
        {id: 1, name: "", persian_name: "خانه و آشپزخانه 3"},
    ]},
    ]},
    {id: 4, name: "", persian_name: "صنایع دستی", categories: [
        {id: 1, name: "", persian_name: "صنایع دستی 1",categories: [
        {id: 1, name: "", persian_name: "صنایع دستی 1"},
        {id: 1, name: "", persian_name: "صنایع دستی 2"},
        {id: 1, name: "", persian_name: "صنایع دستی 3"},
    ]},
        {id: 1, name: "", persian_name: "صنایع دستی 2",categories: [
        {id: 1, name: "", persian_name: "صنایع دستی 1"},
        {id: 1, name: "", persian_name: "صنایع دستی 2"},
        {id: 1, name: "", persian_name: "صنایع دستی 3"},
    ]},
        {id: 1, name: "", persian_name: "صنایع دستی 3",categories: [
        {id: 1, name: "", persian_name: "صنایع دستی 1"},
        {id: 1, name: "", persian_name: "صنایع دستی 2"},
        {id: 1, name: "", persian_name: "صنایع دستی 3"},
    ]},
    ]},
    {id: 5, name: "", persian_name: "عطاری", categories: [
        {id: 1, name: "", persian_name: "عطاری 1", categories: [
        {id: 1, name: "", persian_name: "عطاری 1"},
        {id: 1, name: "", persian_name: "عطاری 2"},
        {id: 1, name: "", persian_name: "عطاری 3"},
    ]},
        {id: 1, name: "", persian_name: "عطاری 2", categories: [
        {id: 1, name: "", persian_name: "عطاری 1"},
        {id: 1, name: "", persian_name: "عطاری 2"},
        {id: 1, name: "", persian_name: "عطاری 3"},
    ]},
        {id: 1, name: "", persian_name: "عطاری 3", categories: [
        {id: 1, name: "", persian_name: "عطاری 1"},
        {id: 1, name: "", persian_name: "عطاری 2"},
        {id: 1, name: "", persian_name: "عطاری 3"},
    ]},
    ]},
    {id: 6, name: "", persian_name: "آرایشی بهداشتی", categories: [
        {id: 1, name: "", persian_name: "آرایشی بهداشتی 1", categories: [
        {id: 1, name: "", persian_name: "آرایشی بهداشتی 1"},
        {id: 1, name: "", persian_name: "آرایشی بهداشتی 2"},
        {id: 1, name: "", persian_name: "آرایشی بهداشتی 3"},
    ]},
        {id: 1, name: "", persian_name: "آرایشی بهداشتی 2", categories: [
        {id: 1, name: "", persian_name: "آرایشی بهداشتی 1"},
        {id: 1, name: "", persian_name: "آرایشی بهداشتی 2"},
        {id: 1, name: "", persian_name: "آرایشی بهداشتی 3"},
    ]},
        {id: 1, name: "", persian_name: "آرایشی بهداشتی 3", categories: [
        {id: 1, name: "", persian_name: "آرایشی بهداشتی 1"},
        {id: 1, name: "", persian_name: "آرایشی بهداشتی 2"},
        {id: 1, name: "", persian_name: "آرایشی بهداشتی 3"},
    ]},
    ]},
    {id: 7, name: "", persian_name: "فرهنگی ، آموزشی و سرگرمی", categories: [
        {id: 1, name: "", persian_name: "فرهنگی 1", categories: [
        {id: 1, name: "", persian_name: "فرهنگی 1"},
        {id: 1, name: "", persian_name: "فرهنگی 2"},
        {id: 1, name: "", persian_name: "فرهنگی 3"},
    ]},
        {id: 1, name: "", persian_name: "فرهنگی 2", categories: [
        {id: 1, name: "", persian_name: "فرهنگی 1"},
        {id: 1, name: "", persian_name: "فرهنگی 2"},
        {id: 1, name: "", persian_name: "فرهنگی 3"},
    ]},
        {id: 1, name: "", persian_name: "فرهنگی 3", categories: [
        {id: 1, name: "", persian_name: "فرهنگی 1"},
        {id: 1, name: "", persian_name: "فرهنگی 2"},
        {id: 1, name: "", persian_name: "فرهنگی 3"},
    ]},
    ]},
    {id: 8, name: "", persian_name: "ورزش و سفر", categories: [
        {id: 1, name: "", persian_name: "ورزش و سفر 1", categories: [
        {id: 1, name: "", persian_name: "ورزش و سفر 1"},
        {id: 1, name: "", persian_name: "ورزش و سفر 2"},
        {id: 1, name: "", persian_name: "ورزش و سفر 3"},
    ]},
        {id: 1, name: "", persian_name: "ورزش و سفر 2", categories: [
        {id: 1, name: "", persian_name: "ورزش و سفر 1"},
        {id: 1, name: "", persian_name: "ورزش و سفر 2"},
        {id: 1, name: "", persian_name: "ورزش و سفر 3"},
    ]},
        {id: 1, name: "", persian_name: "ورزش و سفر 3", categories: [
        {id: 1, name: "", persian_name: "ورزش و سفر 1"},
        {id: 1, name: "", persian_name: "ورزش و سفر 2"},
        {id: 1, name: "", persian_name: "ورزش و سفر 3"},
    ]},
    ]},
    {id: 9, name: "", persian_name: "خدمات کسب و کار", categories: [
        {id: 1, name: "", persian_name: "خدمات کسب و کار 1", categories: [
        {id: 1, name: "", persian_name: "خدمات کسب و کار 1"},
        {id: 1, name: "", persian_name: "خدمات کسب و کار 2"},
        {id: 1, name: "", persian_name: "خدمات کسب و کار 3"},
    ]},
        {id: 1, name: "", persian_name: "خدمات کسب و کار 2", categories: [
        {id: 1, name: "", persian_name: "خدمات کسب و کار 1"},
        {id: 1, name: "", persian_name: "خدمات کسب و کار 2"},
        {id: 1, name: "", persian_name: "خدمات کسب و کار 3"},
    ]},
        {id: 1, name: "", persian_name: "خدمات کسب و کار 3", categories: [
        {id: 1, name: "", persian_name: "خدمات کسب و کار 1"},
        {id: 1, name: "", persian_name: "خدمات کسب و کار 2"},
        {id: 1, name: "", persian_name: "خدمات کسب و کار 3"},
    ]},
    ]},
])
    
   
    
    let counter = 0
    // const[counter, setCounter] = React.useState(0)
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

import React from 'react'
import styles from '../styles/Header.module.css'
import HeaderSearcBox from './elements/HeaderSearcBox'
import HeaderMegaMenu from './elements/HeaderMegaMenu'
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ArticleIcon from '@mui/icons-material/Article';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import TextField from '@mui/material/TextField';
import useScrollingUp from './utils/ScrollHook'
import Button from '@mui/material/Button';

import Sidebar from './Sidebar'
function Header() {

    const [isScrollingUp, scrollAmount] = useScrollingUp()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        borderRadius: 5,
        boxShadow: '0 0 8px 1px #eee',
        p: 4,
    };
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={{ fontSize: 25, fontWeight: 'bold' }} id="modal-modal-title" variant="h6" component="h2">
                        ورود با کلمه عبور
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { mt: 5, width: '100%' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="شماره همراه خود را وارد کنید"
                                    defaultValue="شماره همراه"
                                />
                            </div>
                            <div>
                                <TextField
                                    id="outlined-password-input"
                                    label="رمز عبور خود را وارد کنید"
                                    type="password"
                                    autoComplete="current-password"
                                />
                            </div>
                        </Box>
                        <Button>
                            ورود به خاتون زیبا
                        </Button>
                    </Typography>

                </Box>
            </Modal>
            <header className={isScrollingUp ? styles.headersticky : scrollAmount > 120 ? styles.headerhide : styles.header}>
                <div className='container_custom'>
                    <div className={styles.headerTop}>
                        <Sidebar />
                        <Image className={styles.headerLogo} src={'/images/logo/logo.png'} width={150} height={50} alt="logo" />
                        <HeaderSearcBox className={styles.header_searchbox} />
                        <div className={styles.headerActions}>
                            <a href="#" className={styles.headerActionsItem} onClick={handleOpen}>
                                <FingerprintIcon />
                                <small>ورود / ثبت نام</small>
                            </a>
                            <Link href="/blog">
                                <a className={styles.headerActionsItem}>
                                    <ArticleIcon />
                                    <small>مجله</small>
                                </a>
                            </Link>
                            <Link href="/messages">
                                <a className={styles.headerActionsItem}>
                                    <ChatBubbleOutlineIcon />
                                    <small>پیام ها</small>
                                </a>
                            </Link>
                            <Link href="/basket">
                                <a className={styles.headerActionsItem}>
                                    <ShoppingBasketIcon />
                                    <small>سبد خرید</small>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

                <span className={styles.headerDevider}></span>

                <div className={' container_custom'}>
                    <div className={styles.headerBottom}>
                        <HeaderMegaMenu />
                    </div>
                </div>


            </header>
        </>
    )
}

export default Header
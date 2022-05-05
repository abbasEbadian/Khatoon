import React from 'react'
import { Modal, Box, Typography, Button, TextField }  from '@mui/material'
import {toast} from 'react-toastify'
import {useDispatch} from 'react-redux'
import {login} from '../../redux/actions'
import {useRouter} from 'next/router'

function LoginModal({ handleLoginClose, handleLoginOpen, loginModalOpen}) {
    const dispatch = useDispatch()
    const router = useRouter()

    const [username, setUsername] = React.useState("") 
    const [password, setPassword] = React.useState("") 

    const handleUsername = (e) => { setUsername(e.target.value)}
    const handlePassword = (e) => { setPassword(e.target.value)}

    const _login = ()=>{
        if(!username) {
            toast.warning("نام کاربری وارد نشده است")
            return
        }
        if(password.length < 6) {
            toast.warning("رمز حداقل 6 کاراکتر !")
            return
        }
        dispatch(login({mobile:username, password})).then(({error, message})=>{
            toast(message, {type: (error? "error" : "success")})
            if(error === 0){
                const next = router.query?.next ? router.query.next : "/" 
                handleLoginClose()
                router.replace(next)
            }
        })
        .catch(error=>{
            console.log(error)
            toast.error("خطا در ارتباط")
        })
    }

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
    <Modal
        open={loginModalOpen}
        onClose={handleLoginClose}
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
                            label="نام کاربری خود را وارد کنید"
                            placeholder="nimaa"
                            dir="ltr"
                            value={username}
                            onChange={handleUsername}
                        />
                    </div>
                    <div>
                        <TextField
                            id="outlined-password-input"
                            label="رمز عبور خود را وارد کنید"
                            type="password"
                            autoComplete="current-password"
                            dir="ltr"
                            value={password}
                            onChange={handlePassword}
                        />
                    </div>
                </Box>
                <Button variant="contained" className="mt-4 float-end" onClick={_login} color="primary">
                    ورود/ ثبت نام
                </Button>
            </Typography>

        </Box>
    </Modal>
  )
}

export default LoginModal
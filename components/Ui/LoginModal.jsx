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

    const _login = (e)=>{
        console.log(e)
        e.preventDefault()
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
            if(error === 0 )
                handleLoginClose()
            if(router.query.next){
                router.replace(router.query.next)
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
        minWidth: 360,
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
            <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} id="modal-modal-title" variant="h6" component="h2">
                ورود با کلمه عبور
            </Typography>
                <form
                    onSubmit={_login}
                >
                    <div className="my-5">
                        <TextField
                            required
                            id="outlined-required"
                            label="نام کاربری خود را وارد کنید"
                            placeholder="nimaa"
                            dir="ltr"
                            value={username}
                            name={"username"}
                            onChange={handleUsername}
                            fullWidth
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
                            fullWidth
                            name="password"
                        />
                    </div>
                    <Button variant="contained" className="mt-4 float-end" color="primary" type={"submit"}>
                        ورود/ ثبت نام
                    </Button>
                </form>
               

        </Box>
    </Modal>
  )
}

export default LoginModal
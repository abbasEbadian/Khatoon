import { Skeleton } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BASE_URL } from '../../redux/endpoints'
import EditIcon from '@mui/icons-material/Edit'
import Button from '@mui/material/Button'
import axios from 'axios'
import * as e from '../../redux/endpoints'
import {toast} from 'react-toastify'
import {profile} from '../../redux/actions'
function VendorCover({editMode=false}) {
    const dispatch = useDispatch()
    const user = useSelector(s=>s.auth.user)
    
    const coverRef = React.useRef()
    const avatarRef = React.useRef()
    
    const [coverUploading, setCoverUploading] = React.useState(false);
    const [avatarUploading, setAvatarUploading] = React.useState(false);
    
    const uploadCover = (e1)=>{
      if(!e1.target.files.length) return
      const url = e1.target.name === "cover" ? e.UPLOAD_COVER_IMAGE : e.UPLOAD_AVATAR_IMAGE
      if(e1.target.name === "cover")
        setCoverUploading(true)
      else
        setAvatarUploading(true)

      const data = new FormData()
      data.append('image', e1.target.files[0])
      axios.post(url, data, {
          headers:{
              "Content-Type": "multipart/form-data"
          }
      }).then(response => {
          const {data} = response
          if(data.error === 0){
              toast.success(data.message)
              dispatch(profile())
          }else{
              toast(data.message, {type: data.type})
          }
      }).catch(e=>{console.log(e);toast.error("خطا در برقراری ارتباط")})
      .finally(f=>{
        if(e1.target.name === "cover")
          setCoverUploading(false)
        else
          setAvatarUploading(false)
      })
  }
    return (
      <div className="vendor-cover">
          <div className="cover-parent" sx={{width: 1 , position: "relative", borderRadius: "12px", border: "1px solid #ccc", "overflow": "hidden"}}>
            {coverUploading ?
              <Skeleton variant="rectangular" />
             :
              <Image src={user?.market?.cover ? BASE_URL + user.market.cover :  "/images/cover.png"} objectFit="cover" alt="cover" layout="fill"></Image>
            }
          </div>
          {!editMode&&<>
              <Button variant="white" className="rounded-cricle edit-cover-btn" onClick={e=>coverRef.current.click()}>
                <EditIcon />
              </Button>
              <input type="file" accept="image/*" name="cover" className="d-none" onChange={uploadCover} ref={coverRef}/>
          </>}
          
          <div className="avatar-parent">
          {coverUploading ?
              <Skeleton variant="circle" />
             :
              <Image src={user?.market?.image ? BASE_URL + user.market.image :  "/images/market-image.png"} objectFit="cover" alt="cover"layout="fill"></Image>
            }
            {!editMode&&<>
              <Button variant="white" className="rounded-cricle edit-avatar-btn" onClick={e=>avatarRef.current.click()}> 
                <EditIcon />
              </Button>
              <input type="file" accept="image/*" name="avatar" className="d-none" onChange={uploadCover} ref={avatarRef}/>
              </>}
          </div>
      </div>
    )
}

export default VendorCover
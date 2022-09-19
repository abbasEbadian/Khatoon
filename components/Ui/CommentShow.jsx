import React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import LikeIcon from '@mui/icons-material/ThumbUpAlt';
import DislikeIcon from '@mui/icons-material/ThumbDownAlt';
import {Button,IconButton,InputAdornment} from '@mui/material'
import CommentDialog from '../dialog/CommentsDialog'

export default function CommentShow({comment}) {
    const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div className="container border rounded-3 my-2">
       <div className='d-flex justify-content-between pt-3 px-3'>
            <div className='d-flex'>
              <small>{comment?.user.fullname}</small>
            </div>
            <small>{comment?.date}</small>
       </div>
       <hr/>
       <div className='px-3'>
        <div className='py-4'>
        <p>{comment?.text}</p>

        </div>
        <hr />
        <div className='d-flex justify-content-between py-2'>
        <div className='d-flex'>
          <div dir="ltr">
          <Button color="inherit" startIcon={<LikeIcon/>}>
          {comment?.like_count}
          </Button>
          </div>
          <div dir="ltr">
          <Button color="inherit" startIcon={<DislikeIcon/>}>
          {comment?.dislike_count}
          </Button>
          </div>
        </div>
        <Button color="main" onClick={handleClickOpen}>
            پاسخ دادن
        </Button>
        <CommentDialog item_id={comment.id} isopen={open} answer={comment.text}/>
        </div>
        
       </div>
    </div>
  )
}

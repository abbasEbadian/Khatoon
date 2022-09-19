import React from 'react'
import CommentDialog from '../dialog/CommentsDialog'
import CommentShow from '../Ui/CommentShow'
export default function ProductComments({comments,product_id}) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div className="row py-5 px-3">
    <div className='col-lg-4 col-12'>
      <div className='sticky-top' style={{top:'100px'}}>
      <p>شما هم می توانید دیدگاه و تجربه خود را ثبت کنید</p>
      <Button variant="contained" style={{borderRadius:'50px',backgroundColor:'#df443d'}} fullWidth onClick={handleClickOpen}>
       ثبت پرسش
      </Button>
      <CommentDialog item_id={product_id} isopen={open} />
      </div>
    </div>
    <div className='col-lg-8 col-12'>
      {comments.map((item,idx)=>{
      <CommentShow comment={item} key={idx}/>
      })}
    </div>
</div>
  )
}

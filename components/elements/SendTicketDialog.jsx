import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SEND_TICKET } from "../../redux/endpoints";
import { profile } from "../../redux/actions";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Form } from "react-bootstrap";

function SendTicketDialog({ open, handleClose }) {
  const router = useRouter();
  const user = useSelector((s) => s.auth.user);

  const [order_id, setorder_id] = React.useState(0);
  const [section, setsection] = React.useState(0);
  const [title, settitle] = React.useState("");
  const [content, setcontent] = React.useState("");
  const [priority, setpriority] = React.useState(0);

  const dispatch = useDispatch();
  const _send = () => {
    axios
      .post(SEND_TICKET, {
        order_id,
        section,
        title,
        content,
        priority,
      })
      .then((response) => {
        const { data } = response;
        if (data.error === 0) {
          dispatch(profile());
          toast.success(data.message);
          handleClose()
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => {
        toast.error("خطا در برقراری با  سرور ");
        console.log(err);
      });
  };

  return (
    <Dialog fullWidth maxWidth={"lg"} open={open} onClose={handleClose}>
      <DialogTitle>ثبت تیکت</DialogTitle>
      <DialogContent>
        <form action="#" method="post" className="p-ld-4 p-2">
          <div className="d-flex justify-content-between flex-wrap send-ticket">
            <div className="col-md-5 col-lg-5 col-12 pb-4">
              <label htmlFor="">موضوع تیکت*</label>
              <input
                type="text"
                className="form-control"
                placeholder="موضوع پیام خود را وارد کنید"
                value={title}
                onChange={(e) => settitle(e.target.value)}
              />
            </div>
            <div className="col-md-5 col-lg-5 col-12 pb-4">
              <label htmlFor="">دپارتمان مربوطه </label>
              <Form.Select
                aria-label="Default select example"
                value={section}
                onChange={(e) => setsection(e.target.value)}
              >
                <option value={0}>--انتخاب کنید--</option>
                <option value="حسابداری">حسابداری</option>
                <option value="مالی">مالی </option>
                <option value="پشتیبانی">پشتیبانی</option>
              </Form.Select>
            </div>
            <div className="col-md-5 col-lg-5 col-12 pb-4">
              <label htmlFor="">اولویت *</label>
              <Form.Select
                aria-label="Default select example"
                value={priority}
                onChange={(e) => setpriority(e.target.value)}
              >
                <option value={0}>--انتخاب کنید--</option>
                <option value="کم">کم</option>
                <option value="متوسط">متوسط</option>
                <option value="زیاد">زیاد</option>
              </Form.Select>
            </div>
            <div className="col-md-5 col-lg-5 col-12">
              <label htmlFor="">سفارش مربوطه</label>
              <Form.Select
                aria-label="Default select example"
                value={order_id}
                onChange={(e) => setorder_id(e.target.value)}
              >
                <option value={0}>--انتخاب کنید--</option>
                {user && user.order_set
                  ? user.order_set.reverse().map((item) => {
                      return (
                        <option key={item.id} value={item.id}>
                          {item.order_code}
                        </option>
                      );
                    })
                  : null}
              </Form.Select>
            </div>
            <div className="col-12 py-4">
              <label htmlFor="">متن پیام شما *</label>
              <textarea
                className="form-control"
                name=""
                id=""
                cols="30"
                rows="10"
                value={content}
                onChange={(e) => setcontent(e.target.value)}
              ></textarea>
            </div>
          </div>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}color="error">لغو</Button>
        <Button onClick={_send}variant="contained" >ثبت</Button>
      </DialogActions>
    </Dialog>
  );
}
export default SendTicketDialog;

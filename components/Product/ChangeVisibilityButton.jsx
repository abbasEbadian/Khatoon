import React from "react";

import { Button } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

import { CHANGE_VISIBILITY } from "../../redux/endpoints";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { profile } from "../../redux/actions";
import { useDispatch } from "react-redux";

function ChangeVisibilityButton({ product }) {
  const dispatch = useDispatch();
  const change_visibility = () => {
    axios
      .post(CHANGE_VISIBILITY, {
        pk: product.id,
        visible: !product.published,
      })
      .then((response) => {
        const { data } = response;
        toast(data.message, { type: data.error ? "error" : "success" });
        dispatch(profile());
      })
      .catch((e) => {
        console.log(e);
        toast.error("خطا در ارتباط");
      });
  };
  return (
    <Button
      size="small"
      variant="outlined"
      color="info"
      startIcon={<VisibilityIcon />}
      className="mx-1"
      onClick={change_visibility}
    >
      {product.published ? (
        <span>{"عدم انتشار"}</span>
      ) : (
        <span>{"انتشار"} </span>
      )}
    </Button>
  );
}

export default ChangeVisibilityButton;

import React from "react";
import { Button, Typography } from "@mui/material";
function NewProductVariantHelp() {
  const [showVariantHelp, setShowVariantHelp] = React.useState(false);
  return (
    <>
      <Button
        color="warning"
        variant="outlined"
        onClick={(e) => setShowVariantHelp((s) => !s)}
      >
        {" "}
        {showVariantHelp ? "عدم " : ""} نمایش راهنما
      </Button>

      <Typography
        sx={{ lineHeight: "19px", fontSize: "11px" }}
        className={
          "mb-3 bg-white border p-3 rounded" +
          " " +
          (showVariantHelp ? "d-block" : "d-none")
        }
      >
        در این بخش میتوانید برای خریدار قابلیت انتخاب ارائه دهید.
        <br />
        برای مثال رنگ قرمز یا سبز
        <br />
        یا
        <br />
        سایز لارج یا مدیوم
        <br />
        و یا حتی ترکیبی از ویژگی ها ، برای مثال :
        <br />
        قرمز و لارج.
        <br />
        که امکان تعیین تعداد موجودی و قیمت برای حالت های مختلف قابل اعمال است.
        <br />
        <br />
        <strong>
          برای ایجاد کافیست ، بعد از فشردن دکمه «افزودن ویژگی»
          <br />
          ویژگی مربوطه و مقادیر آن ویژگی را انتخاب نمایید و سپس تایید را بزنید.
        </strong>
        <br />
        <br />
        در پایین این لیست ، جدولی با حالت های ممکن برای شما ساخته خواهد شد.
        <br />
        برای حالت های دلخواه می توانید قیمت و تعداد موجود مشخص نمایید.
      </Typography>
    </>
  );
}

export default NewProductVariantHelp;

import { Skeleton, Tooltip } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BASE_URL } from "../../redux/endpoints";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import axios from "axios";
import * as e from "../../redux/endpoints";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { profile } from "../../redux/actions";
import VerifiedIcon from "@mui/icons-material/Verified";

function VendorCover({ editMode = false, vendor }) {
  const dispatch = useDispatch();
  const router = useRouter()
  const { user, loading: loadingUser } = useSelector((s) => s.auth);

  const coverRef = React.useRef();
  const avatarRef = React.useRef();

  const [coverUploading, setCoverUploading] = React.useState(false);
  const [avatarUploading, setAvatarUploading] = React.useState(false);

  const uploadCover = (e1) => {
    if (!e1.target.files.length) return;
    const url =
      e1.target.name === "cover" ? e.UPLOAD_COVER_IMAGE : e.UPLOAD_AVATAR_IMAGE;
    if (e1.target.name === "cover") setCoverUploading(true);
    else setAvatarUploading(true);

    const data = new FormData();
    data.append("image", e1.target.files[0]);
    axios
      .post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const { data } = response;
        if (data.error === 0) {
          toast.success(data.message);
          dispatch(profile());
        } else {
          toast(data.message, { type: data.type });
        }
      })
      .catch((e) => {
        console.log(e);
        toast.error("خطا در برقراری ارتباط");
      })
      .finally((f) => {
        if (e1.target.name === "cover") setCoverUploading(false);
        else setAvatarUploading(false);
      });
  };
  const [coverImage, setCoverImage] = React.useState("/images/cover.png");
  const [image, setImage] = React.useState("/images/market-image.png");
  const [message, setMessage] = React.useState("...");
  const [name, setName] = React.useState("...");
  React.useEffect(() => {
    if (vendor) {
      setCoverImage(
        vendor?.cover ? BASE_URL + vendor.cover : "/images/cover.png"
      );
      setImage(
        vendor?.image ? BASE_URL + vendor.image : "/images/market-image.png"
      );
      setMessage(vendor?.message || "...");
      setName(vendor?.name || "...");
    } else {
      setCoverImage(
        user?.market?.cover ? BASE_URL + user.market.cover : "/images/cover.png"
      );
      setImage(
        user?.market?.image
          ? BASE_URL + user.market.image
          : "/images/market-image.png"
      );
      setName(user?.market?.name || "...");
      setMessage(user?.market?.message || "...");
    }
  }, [user, vendor, setCoverImage]);


  const create_chat = () =>{
    axios.post(e.CREATE_CHAT_FOR_USER, {
        market_id: vendor.id
    })
    .then((response) =>{
        const {data} = response
        if(!data.error){
            router.push({
                pathname: '/user-panel/messages',
                query: { chat_id: data.chat_id },
              })
        }
        else{
            toast.error(data.message)
        }
    })
    .catch(err=>{
        console.log(err)
        toast.error("خطا در برقراری ارتباط")
    })
  }

  return (
    <>
      <div className="vendor-cover">
        <div
          className="cover-parent"
          sx={{
            width: 1,
            position: "relative",
            borderRadius: "12px",
            border: "1px solid #ccc",
            overflow: "hidden",
          }}
        >
          {coverUploading || loadingUser ? (
            <Skeleton variant="rectangular" />
          ) : (
            <Image
              src={coverImage}
              objectFit="cover"
              alt="cover"
              layout="fill"
            ></Image>
          )}
        </div>
        {editMode && (
          <>
            <Button
              variant="white"
              className="rounded-cricle edit-cover-btn"
              onClick={(e) => coverRef.current.click()}
            >
              <EditIcon />
            </Button>
            <input
              type="file"
              accept="image/*"
              name="cover"
              className="d-none"
              onChange={uploadCover}
              ref={coverRef}
            />
          </>
        )}

        <div className="avatar-parent">
          {coverUploading || loadingUser ? (
            <Skeleton variant="circle" />
          ) : (
            <Image
              src={image}
              objectFit="cover"
              alt="cover"
              layout="fill"
            ></Image>
          )}
          {editMode ? (
            <>
              <Button
                variant="white"
                className="rounded-cricle edit-avatar-btn"
                onClick={(e) => avatarRef.current.click()}
              >
                <EditIcon />
              </Button>
              <input
                type="file"
                accept="image/*"
                name="avatar"
                className="d-none"
                onChange={uploadCover}
                ref={avatarRef}
              />
            </>
          ) : (
            <Tooltip title="این غرفه مورد تایید وبسایت میباشد." role="button">
              <VerifiedIcon
                sx={{ color: "#3a9dff", fontSize: "26px" }}
                className="verified-icon"
              />
            </Tooltip>
          )}
        </div>
        {!editMode && (
          <>
            <div className="vendor-name">
              <h5>{name}</h5>
            </div>
          </>
        )}
      </div>
      {!editMode?<div className="products-filterbox mt-3">
        <div className="d-flex align-items-center justify-content-between">
          <p>پیام فروشگاه:</p>
            <Button
                variant="outlined"
                sx={{
                  borderRadius: "15px",
                }}
                onClick={create_chat}
              >
                گفت و گو با 
                فروشنده
            </Button>
        </div>
        <br />
        <small>{message}</small>
      </div>:null}
    </>
  );
}

export default VendorCover;

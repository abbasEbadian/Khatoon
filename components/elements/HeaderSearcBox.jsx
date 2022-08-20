import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import * as e from "../../redux/endpoints";
import axios from "axios";
import { Alert, AlertTitle } from "@mui/material";
import { product_imlink } from "../utils";
import Image from "next/image";
import {useRouter} from 'next/router'
export default function HeaderSearcBox() {
    const router = useRouter()
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [options, setOptions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const changeName = (value) => {
    setName(value);
    if(value.length < 3) {setOpen(false);return};
    setLoading(true);
    axios
      .post(e.GET_PRODUCT_BY_NAME, { name: value })
      .then((response) => {
        const { data } = response;
        if (data.products) setOptions(data.products);
        else setOptions([]);
      })
      .catch(e=>{setOptions([])})
      .finally(f=>setLoading(false));

  };
  const onSelect = (value, reason) =>{
      console.log(reason)
      if(reason === "selectOption")
        router.push('/shop/product/'+ value.url)
  }
  return (
    <Autocomplete
      id="header-searchbox"
      className="header-searchbox"
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
          if(name.length>1)
        setOpen(true);
      }}
    //   onClose={() => {
    //     setOpen(false);
    //   }}
      isOptionEqualToValue={(option, value) => option.name === value}
      getOptionLabel={(option) => option.name || ""}
      options={options}
      loading={loading}
      loadingText="در حال جستجو"
      noOptionsText="موردی یافت نشد"
      onInputChange={(e, value) => changeName(value)}
      inputValue={name}
      onChange={(e, value, reason)=>onSelect(value, reason)}
      renderOption={(props, option) => (
        <li {...props}>
          
          <div className="d-flex align-items-center ">
                <Image src={product_imlink(option.image)} alt={option.name} width={48} height={32}/>
                <div className="ps-3 pt-2">
                    <h6>{option.name}</h6>
                    <small>{"فروشگاه "}{option.market_id.name}  </small>
                </div>
              </div>
        </li>
      )}
      renderInput={(params) => (
        <TextField
          color="main"
          {...params}
          label={"جستجو " }
          helperText={name.length <3 && `${name.length}/3` || ""}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  FilterAlt,
  Sort,
} from "@mui/icons-material";
import { Grid } from "@mui/material";

function TableHeaderInputs(props) {
  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={props.searchPlaceHolder}
          inputProps={{ "aria-label": props.searchPlaceHolder }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl sx={{ mt: 2, borderRadius: "30px", minWidth: "100%" }}>
            <InputLabel id="demo-simple-select-helper-label">
              {props.filterLabel}
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label={props.filterLabel}
              IconComponent={() => (
                <FilterAlt sx={{ mx: 2, borderRadius: "30px" }} />
              )}
            >
              <MenuItem value={10}>زمان آماده سازی</MenuItem>
              <MenuItem value={20}>موجودی</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl sx={{ mt: 2, borderRadius: "30px", minWidth: "100%" }}>
            <InputLabel id="demo-simple-select-helper-label">
              {props.sortLabel}
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="فیلترهای موجود"
              IconComponent={() => (
                <Sort sx={{ mx: 2, borderRadius: "30px" }} />
              )}
            >
              <MenuItem value={10}>جدیدترین</MenuItem>
              <MenuItem value={20}>محبوب ترین</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );

}


TableHeaderInputs.defaultProps = {
  searchPlaceHolder: "جست و جو",
  filterLabel: 'فیلترهای موجود',
  sortLabel: 'نمایش بر اساس',

}


export default TableHeaderInputs;

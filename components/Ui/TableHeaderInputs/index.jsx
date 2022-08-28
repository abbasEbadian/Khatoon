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

function index({
  searchValue,
  searchValueChange,
  filterValue,
  filterValueChange,
  sortValue,
  sortValueChange,

}) {
  return (
    <>
      <Paper
        sx={{
          p: "2px 4px",

          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      > 
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="جست و جو در محصولات"
          inputProps={{ "aria-label": "جست و جو در محصولات" }}
          value={searchValue}
          onChange={searchValueChange}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl sx={{ mt: 2, borderRadius: "30px", minWidth: "100%" }}>
            <InputLabel id="demo-simple-select-helper-label">
              فیلترهای موجود
            </InputLabel>
            <Select
              label="فیلترهای موجود"
              IconComponent={() => (
                <FilterAlt sx={{ mx: 2, borderRadius: "30px" }} />
              )}
              className="bg-white"
              value={filterValue}
              onChange={filterValueChange}
            >
              <MenuItem value={"preperation_time"}>زمان آماده سازی صعودی</MenuItem>
              <MenuItem value={"-preperation_time"}>زمان آماده سازی نزولی</MenuItem>
              <MenuItem value={"_count"}>موجودی صعودی</MenuItem>
              <MenuItem value={"-_count"}>موجودی نزولی</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl sx={{ mt: 2, borderRadius: "30px", minWidth: "100%" }}>
            <InputLabel id="demo-simple-select-helper-label">
             مرتب کردن
            </InputLabel>
            <Select
              label="فیلترهای موجود"
              className="bg-white"
              IconComponent={() => (
                <Sort sx={{ mx: 2, borderRadius: "30px" }} />
              )}
              value={sortValue}
              onChange={sortValueChange}
            >
              <MenuItem value={"-created"}>جدیدترین</MenuItem>
              <MenuItem value={"created"}>قدیمی ترین</MenuItem>
              <MenuItem value={"price"}>گرانترین</MenuItem>
              <MenuItem value={"-price"}>ارزان ترین</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}

export default index;
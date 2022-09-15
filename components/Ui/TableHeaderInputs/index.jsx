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
import { Grid, Button,Menu } from "@mui/material";
import FilterDropdown from '../FilterDropdown';

function index({
  searchValue,
  searchValueChange,
  filterValue,
  filterValueChange,
  sortValue,
  sortValueChange,

}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};
const handleClose = () => {
    setAnchorEl(null);
};
  return (
    <>
     <Grid container spacing={3}>
     <Grid item xs={6}>
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
          className="h-100"
          placeholder="جست و جو در محصولات"
          inputProps={{ "aria-label": "جست و جو در محصولات" }}
          value={searchValue}
          onChange={searchValueChange}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
     </Grid>
        <Grid item xs={3}>
         <Button variant="outlined" onClick={handleClick} size="large"style={{height:'100%',width:"100%"}} startIcon={<FilterAlt />}>
            فیلتر کردن
          </Button>
         <Menu
         id="simple-menu"
         anchorEl={anchorEl}
         keepMounted
         open={open}
         onClose={handleClose}
       >
      <FilterDropdown/>
      </Menu>
        </Grid>
        <Grid item xs={3}>
          <FormControl sx={{ borderRadius: "30px", minWidth: "100%" }}>
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
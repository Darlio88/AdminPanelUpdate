import React, { useState } from "react";
import { setFilter } from "react-table";
import {TextField} from "@mui/material"

import {makeStyles} from "@mui/styles"

const useStyles=makeStyles((theme) => ({
  
}))
export function GlobalFilters() {
  const [filterInput, setFilterInput] = useState("");
  const handleChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("show.name", value);
    setFilterInput(value);
  }
 const classes=useStyles()
  return (
      <div className={classes.text}>
        <TextField 
        id="outlined-basic"
         label="Search User:" 
         variant="outlined" 
        placeholder="search user....."
         value={filterInput}
         onChange={handleChange}
         />
      </div>
  );
}

import React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  items: {
    display: "flex",
    justifyContent: "space-between",
    padding:"1em"
  },
  nav: {
    position: "fixed",
    backgroundColor: "white",
    color: "black",
    height: "10vh",
  },
  text: {
    
  },
}));

export default function AdminPanelNav() {
  const styles = useStyles();
  return (
    <AppBar position="fixed" className={styles.nav}>
      <Toolbar variant="dense" className={styles.items}>
        <div>
          <Avatar  sx={{ mr: 2, mb:2}}>
          <AdminPanelSettingsIcon
            edge="start"
            color="inherit"
            aria-label="menu"
           
            fontSize="large"
          />
          </Avatar>
        </div>
        <div className={styles.text}>
          <Typography variant="h4" color="inherit" component="h1" sx={{fontWeight:"bold"}}>
            Admin Panel
          </Typography>
        </div>
        <div>
          <Avatar sx={{ mr: 2, mb:2}}></Avatar>
        </div>
      </Toolbar>
    </AppBar>
  );
}

import { Container, Typography } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";

import PublicIcon from "@mui/icons-material/Public";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TableViewIcon from "@mui/icons-material/TableView";
import LogoutIcon from "@mui/icons-material/Logout";
import RedeemIcon from "@mui/icons-material/Redeem";
import CategoryIcon from "@mui/icons-material/Category";

import {
  Bookmark,
  List,
  ExitToApp,
 
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  
  TabletMac,
} from "@mui/icons-material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingLeft:"1em",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    margin:"1em",
    
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
      margin:"1em",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Link href="#" underline="hover" color="inherit">
      <div className={classes.item}>
      
        <DashboardIcon className={classes.icon} />
        <Typography className={classes.text}>Dashboard</Typography>
       
      </div>
      </Link>
      <Link href="#" underline="hover" color="inherit">
      <div className={classes.item}>
        <TableViewIcon className={classes.icon} />
        <Typography className={classes.text}>Table</Typography>
      </div>
      </Link>
      <Link href="#" underline="hover" color="inherit">
      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div>
      </Link>
      <Link href="#" underline="hover" color="inherit">
      <div className={classes.item}>
        <PhotoCamera className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      </Link>
      <Link href="#" underline="hover" color="inherit">
      <div className={classes.item}>
        <PlayCircleOutline className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      </Link>
      <Link href="#" underline="hover" color="inherit">
      <div className={classes.item}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      </Link>
      <Link href="#" underline="hover" color="inherit">
      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      </Link>
      <Link href="#" underline="hover" color="inherit">
      <div className={classes.item}>
        <RedeemIcon className={classes.icon} />
        <Typography className={classes.text}>Gift</Typography>
      </div>
      </Link>
      <Link href="#" underline="hover" color="inherit">
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      </Link>
      <Link href="#" underline="hover" color="inherit">
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
      </Link>
    </Container>
  );
};
export default Sidebar;

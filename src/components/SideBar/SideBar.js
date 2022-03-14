import { Card, Typography, Stack } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TableViewIcon from '@mui/icons-material/TableView';
import LogoutIcon from "@mui/icons-material/Logout";
import LiveTvIcon from '@mui/icons-material/LiveTv';


export default function SideBar() {
  return (
    <Card
      elevation={3}
      sx={{
        minWidth: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "spaceBetween",
        alignItems: "center",
        margin: "10px",
        backgroundColor: "#1b0e30",
        color: "white",
        borderRadius: "15px"
      }}
    >
      <Typography variant="h5" component="h1" sx={{ padding:"15px",marginTop: "2px", marginBottom: "15px", marginLeft: "10px", marginRight: "10px" }}>
        <LiveTvIcon sx={{ fontSize: "25px" }} />Smart Live
      </Typography>
      <br />
      <Stack direction="column" spacing={2} justifyContent="center">
        <Link href="#" underline="hover" sx={{ color: "white" }}>
          <Typography variant="h6" component="h6">
            <TableViewIcon fontSize="large" />
            Tables
          </Typography>
        </Link>
        <Link href="admin/users" underline="hover" sx={{ color: "white" }}>
          <Typography variant="h6" component="h6">
            <PeopleAltIcon fontSize="large" />
            Users
          </Typography>
        </Link>
      
        <Link href="/" underline="hover" sx={{ color: "white" }}>
          <Typography variant="h6" component="h6">
            <LogoutIcon fontSize="large" />
            Sign-out
          </Typography>
        </Link>
      </Stack>

    </Card>
  );
}

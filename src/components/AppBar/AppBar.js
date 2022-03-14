import React from 'react';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';


export default function AdminPanelNav() {
  return (
    <Paper sx={{position:"static",paddingTop:"10px", borderRadius:"10px"}}>
      <AppBar position="static" sx={{ flexGrow: 0, borderRadius:"10px", backgroundColor:"#1b0e30", color:"white" }}>
        <Toolbar variant="dense">
          <AdminPanelSettingsIcon edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} />
          <Typography variant="h4" color="inherit" component="h1">
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
    </Paper>
  );
}

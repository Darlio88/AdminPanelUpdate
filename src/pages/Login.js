import {
  Typography,
  Grid,
  Avatar,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { loginRoute } from "../utils/API";

export default function Login() {
  let navigate = useNavigate()
  const [details, setDetails] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handleChange = (event) => {
    setDetails({ ...details, [event.target.value]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { username, password } = details;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
        navigate("/admin")
      }
    }
  };

  const handleValidation = () => {
    const { user, pas } = details;
    if (pas === "") {
      toast.error("password is required", toastOptions);
      return false;
    } else if (user === "") {
      toast.error("username is required", toastOptions);
      return false;
    }
    return true;
  };
  return (
    
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          paddingLeft: 7,
          paddingRight: 7,
          paddingTop: 4,
          paddingBottom: 2,
          height: '70vh',
          width: '30vw',
          margin: "30px auto",
          rowGap: "5px",
          borderRadius: 10,
          backgroundColor:"#1b0e30",
          color: "white",
        }}
      >
        <Grid align="center" sx={{}}>
          <Avatar sx={{ backgroundColor: "#443955" }}>
            {" "}
            <LockIcon fontSize="large" />{" "}
          </Avatar>
          <Typography variant="h4" component="h1" >
            Login as Admin
          </Typography>
        </Grid>
        <Grid align="center">
        <form
          onSubmit={handleSubmit}
          method="post"
         
        >
          <TextField
            name="username"
            label="UserName"
            onChange={(e) => handleChange(e)}
            required
            fullWidth
            placeholder="Enter your username..."
            sx={{ marginTop: "25px", marginBottom: "15px", "& label":{color:"white"} }}
          />
          <TextField
            name="password"
            label="Password"
            onChange={(e) => handleChange(e)}
            required
            fullWidth
            placeholder="Enter your password"
            type="password"
            fullWidth
            placeholder="Enter your password..."
            sx={{ marginTop: "15px", marginBottom: "15px", "& label":{color:"white"} }}
          />
          <Button
            type="submit"
            color="primary"
            fullWidth
            required
            variant="contained"
            sx={{
              marginTop: "15px",
              marginBottom: "10px",
              borderRadius: 4,
              width: "130px",
              fontSize: "20px",
            }}
          >
            Sign in
          </Button>
        </form>
        </Grid>
       
        <ToastContainer />
      </Paper>
  );
}

import {
  Typography,
  Grid,
  Avatar,
  Paper,
  TextField,
  Button,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "5em",
    paddingTop: "5em",
    marginBottom: "3em"
  },
  login: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    flexGrow: 1,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 4,
    paddingBottom: "1em",

    margin: "30px auto",
    rowGap: "1em",
    borderRadius: 10,
    backgroundColor: "white",
    color: "white",
  },
  items:{
    spacing: "auto"
  },
  text: {
    marginTop: "2.5em",
    marginBottom: "1.5em",
    marginRight: "1em",
    marginLeft:"1em"
  },
  button: {
    marginTop: "1.5em",
    marginBottom: "1.5em",
    
    
  },
  typo:{
    marginTop:"1em",
    marginBottom:"3em"
  }
}));

export default function Login() {
  const classes = useStyles();
  let navigate = useNavigate();
  const [details, setDetails] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    setDetails({ ...details, [event.target.value]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { username, password } = details;
      const { data } = await axios.post("http://localhost:7000", {
        username,
        password,
      });
      if (data.status === false) {
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
        navigate("/admin");
      }
    }
  };

  const handleValidation = () => {
    const { user, pas } = details;
    if (pas === "") {
      return false;
    } else if (user === "") {
      return false;
    }
    return true;
  };
  return (
    <Container className={classes.container}>
      <Paper elevation={3} className={classes.login}>
        <Grid align="center" className={classes.items}>
          <div  className={classes.typo} >
          <Avatar sx={{marginBottom:"1em"}} >
            {" "}
            <LockIcon fontSize="large" />{" "}
          </Avatar>
          <Typography variant="h4" component="h1" >
            Login as Admin
          </Typography>
          </div>
        </Grid>
        <Grid align="center">
          <form onSubmit={handleSubmit} method="post">
            <div className={classes.text}>
            <TextField
              name="username"
              label="UserName"
              onChange={(e) => handleChange(e)}
              required
              fullWidth
              placeholder="Enter your username..."
              sx={{"& label": { color: "grey" },}}
            />
            </div>
            
            <div className={classes.text}>
            <TextField
              name="password"
              label="Password"
              onChange={(e) => handleChange(e)}
              required
              fullWidth
              placeholder="Enter your password"
              type="password"
              
            />
            </div>
            <div className={classes.button}>
            <Button
              type="submit"
              color="primary"
              fullWidth
              required
              variant="contained"
             sx={{width: "auto",
             fontSize: "20px",
             borderRadius: "15px",}} 
            >
              Sign in
            </Button>
            </div>
          </form>
        </Grid>
      </Paper>
    </Container>
  );
}

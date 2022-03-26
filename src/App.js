import { Card, Grid } from "@mui/material";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppBar from "./components/AppBar/AppBar";

import {DatabaseTable} from "./components/DatabaseTable/DatabaseTable";
import SideBar from "./components/SideBar/SideBar";
import Login from "./pages/Login";
import { createTheme, ThemeProvider } from "@mui/material/styles";





const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "white",
          borderBottom: "1px solid white",
          borderRadius: "7px",
        },
      
      },
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div
          styles={{
            backgroundColor: "#443955",
            borderRadius: "10px",
            height: "100%",
          }}
        >
          <AppBar />
          <br />

          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="admin/"
              element={
<Grid container spacing={{ xs: 1, sm: 2, md: 4 }}>

  <Grid item xs={2} sm={3}>
  <SideBar />
  </Grid>
  <Grid item xs={10} sm={9}>
  <DatabaseTable />
  </Grid>
  </Grid> }
            />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

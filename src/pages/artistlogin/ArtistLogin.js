import "./Login.css";
import { useState } from "react";
import axios from "axios";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

//form

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const ArtistLogin = () => {
  const [artist, setArtist] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtist({
      ...artist,
      [name]: value,
    });
  };
  const login = () => {
    axios
      .post("http://localhost:3001/api/artist/artlogin", artist)
      .then((res) => {
        alert(res.data.message);
        if (res.data.message == "login successful") {
          sessionStorage.setItem("artist", JSON.stringify(artist.email));
          window.location.href = "/dash";
        } else {
          window.location.href = "/artistlogin";
        }
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          borderRadius="5%"
          sx={{
            marginTop: 8,
            p: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            border: "3px solid black",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            <b> Artist Login</b>
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={artist.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              value={artist.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={login}
              disabled={!artist.email || !artist.password}
            >
              Sign In
            </Button>
            <Grid container sx={{ mt: 2, mb: 2, p: 1 }}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {"  Forgot password?"}
                </Link>
              </Grid>
              <Grid item>
                <Link href="/artregister" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>


  );
};

export default ArtistLogin;

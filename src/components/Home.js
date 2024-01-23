import React from "react";

import {AppBar,Button,Toolbar} from "@mui/material";


const Home = () => {
  return (
    <div style={{backgroundColor:'black'}}>
    <AppBar
      position="static"
     
      style={{ backgroundColor: "grey", height:"60px"}}
 >
        
      <Toolbar>
       <h1 style={{color:"black"}}><i>TICKET 4us</i></h1>

        <Button
          href="/register"
          varient="contained"
          sx={{ p: 3, marginLeft: "auto" }}
        >
          <h3 style={{color:"black"}}><u>Register</u></h3>
        </Button>
        <Button
          href="/login"
          varient="contained"
          sx={{ p: 3 }}
        >
          <h3 style={{color:"black"}}><u>Login</u></h3>
        </Button>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default Home;

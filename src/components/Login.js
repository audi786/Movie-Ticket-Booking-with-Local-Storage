import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from '@mui/material';

 function Andr(){

  const[email,setEmail]=useState("")
  const[pswd,setPswd]=useState("")


  return(
   
    
    <div style={{height:"100vh",backgroundColor:'blueviolet'}}>
       
      <h3 style={{textAlign:'center',backgroundColor:'black',color:'white',height:'45px',paddingTop:'8px'}}>LOGIN</h3>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div style={{ marginLeft:'41%'}}>
     <label style={{fontSize:'20px',color:'black'}}>Email</label>
     <br></br>

      <input style={{fontSize:'20px'}} type="email" onChange={(e)=>setEmail(e.target.value)}/>
       <br></br>
       <br></br>

       <label style={{fontSize:'20px',color:'black'}}>Pass</label>
       <br></br>

       <input style={{fontSize:'20px'}} type="password" onChange={(e)=>setPswd(e.target.value)} />
       </div>

       <br></br>
       <br></br>
      <Button href="/AVATAR" style={{width:'10%',backgroundColor:'#45b0b0', marginLeft:'45%', fontSize:'15px',color:'black'}} >LOGIN</Button>
     
      <br></br>
      <br></br>

     <a href="/"> <p  style={{color:'black',marginLeft:'45%'}}> Go Back to Home</p>
     </a>
     </div>
 
   )
 }

 export default Andr;

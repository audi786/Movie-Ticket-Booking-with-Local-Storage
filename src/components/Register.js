import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Andr from "./Login"
function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password ) {
      setFlag(true);
    } else {
      setFlag(false);

      localStorage.setItem("Name", JSON.stringify(name));
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password",JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <>
 
        <div style={{height:"100vh",backgroundColor:'blueviolet'}}>
          {" "}
          {login ? (

            <form onSubmit={handleFormSubmit}>

        <h3 className="head" style={{backgroundColor:'black',textAlign:'center',height:'5vh',fontSize:'30px' ,color:'white' }} >REGISTER WITH US</h3>
             
              <div className="group" style={{marginLeft:'38%',width:'25%',fontSize:'20px',color:'black',marginTop:'7%'}}>
                <label>Name</label>
                &nbsp;
                &nbsp;
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                  style={{fontSize:'15px'}}
               />
             
             <br></br>
             

                <label>Email</label>
                &nbsp;
                &nbsp;
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                  style={{fontSize:'15px'}}
                />
              
              <br></br>
             

                <label>Password</label>
                &nbsp;
                &nbsp;
                
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                  style={{fontSize:'15px'}}
            />
              </div>

             
              <br></br>            
              <br></br>            
          
<div className="bot" style={{marginLeft:'40%'}}>
              <button type="submit" className="btnde" style={{fontSize:'25px',width:'15%',backgroundColor:'#45b0b0',marginLeft:'10%'}}>
                Register
              </button>

              <br></br>
             <br></br>


              <p style={{fontSize:"20px",marginLeft:'4%',color:'black'}} onClick={handleClick} >
                Already registered{" "}log in?
                
              </p>
              
        <a href="/"> <p  style={{fontSize:"20px",color:'black',marginLeft:'7%'}}> Go Back to Home</p>
     </a>
              <br></br>
              
              {flag && (
                <Alert style={{width:'40%',color:'black',textAlign:'center',backgroundColor:'black',color:'white'}}  variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
              </div>
            </form>
          ) : (
            <Andr />
          )}
        </div>
    
    </>
  );
}

export default Registration;
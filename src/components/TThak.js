import React from 'react';
import { Button } from 'react-bootstrap';

const AppreciationPage = () => {
  return (
    <div className="appreciation-page" style={{padding:'20%',textAlign:'center',color:'white',backgroundColor:'blueviolet',height:'100vh'}}>
      <h1 style={{fontSize:'40px'}}>Thank You for Booking!</h1>
      <p style={{fontSize:'30px',marginTop:'10px'}}>Your ticket(s) have been successfully booked.</p>
      <p>Enjoy the event!</p>
    
<br></br>
<br></br>
<br></br>
<br></br>

    <div className='btn'>

<Button  href="/" style={{fontSize:'20px',backgroundColor:'black'}}> Go To HomePage </Button>

    </div>

    </div>
    
  );
};

export default AppreciationPage;

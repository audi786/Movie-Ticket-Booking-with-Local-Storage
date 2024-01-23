import React, { useState, useRef } from "react";
import './trial.css'
import { Button } from '@mui/material';

const AvatarSeat = () => {

  const data=useRef();
  const data1=useRef();

  const handleClick=()=>{
    console.log(data.current.value,"Seat Booked")
    localStorage.setItem("SeatNumber",data.current.value)
    localStorage.setItem("Name",data1.current.value)

  }
console.log(localStorage.getItem("SeatNumber"),"Number Seat Booked")



  const [selectedSeats, setSelectedSeats] = useState([]);

  
   


  return (
    <div className="seat-selection">
            
    <div className="screen">MOVIE_NAME
      <h3>  AVATAR 2 </h3>
 </div>
      
    
    <div className="seat-picker-container">
      <h2>Choose your seats:</h2>
      <div className="seat-picker">
        {[...Array(84)].map((_, i) => {
          const seatNumber = i + 1;
          const seatReserved = seatNumber % 7 === 0 || seatNumber % 11 === 0;

          const selected = selectedSeats.includes(seatNumber);
          
          return (
            <div
              key={seatNumber}
              className={`seat ${seatReserved ? "reserved" : ""} ${
                selected ? "selected" : ""
              }`}
              // onClick={() => handleSeatSelect(seatNumber)}
            >
              {seatNumber}
            </div>
          );
        })}
      </div>
      
<div style={{marginRight:"140px"}}>
   <label> Enter Seat Number
     &nbsp;
     &nbsp;

   <input ref={data} placeholder="Seat Number" required />
  
   <br></br>
            <br></br>
            <label>Enter Your Name</label>
             &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <input ref={data1} placeholder="Name" required/>
            <br></br>
   <br></br>
       <Button href='/thanks' onClick={handleClick} style={{width:"18%",marginLeft:"125px",backgroundColor:'white',color:'black'} }>BOOK</Button>
         
   </label>

        

   </div>

    </div>
          </div>
  );
};

export default AvatarSeat;

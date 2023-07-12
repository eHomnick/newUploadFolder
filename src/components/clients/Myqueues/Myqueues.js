import axios from "axios";
import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button, } from 'react-bootstrap';
import colorhier from '../../Images/colorhier.jpg'
import "./Myqueues.css"


const Myqueues = () => {
  const [appointment, setappointment] = useState([]);

let idUser=""
    useEffect(() => {
        axios.get(`http://localhost:3030/appointment/getappointmenttById/63220c3049f16ab171643e0b`).then((res) => {
            console.log(res.data)
             setappointment(res.data)
          console.log(appointment)
        });
    
      }, [])

    function deleteQ(q)
      {
     alert(q._id)
        
    // DELETE request using fetch with async/await
    // const element = document.querySelector('#delete-request-async-await .status');
     fetch('`http://localhost:3030/appointment/deleteAppointment/'+q._id, { method: 'DELETE' }).then(console.log("התור נמחק בהצלחה"));
    // element.innerHTML = egtdfg'Delete successful';
      }
    return (
        <div className="container-fluid">
            <div>
                <p>התורים שלי</p>
            </div>
            
            {appointment ? appointment.map((object, i) => (
                <div className="row cancellation">
                    <div className="col-3">
                        <button className="button" onClick={()=>{deleteQ(object)}}>בטל תור</button>
                        <button className="button">שנה תור </button>
                    </div>
                    <div className="col-6 details">
                        <p>שם הספר:   {object.user.name}  {object.user.lastName}  </p>
                        <p>תספורת:  {object.option.name}</p>
          
                        <p>תאריך:  {object.date}</p>
                    </div>
                    <div className="col-3">
                        <img className='images' src={colorhier} />
                    </div>
                </div>
            )):<></>}
 
        </div>

    )
}

export default Myqueues
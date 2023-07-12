import React from 'react';
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button, } from 'react-bootstrap';
import "./cancellation.css"
import colorhier from '../../Images/colorhier.jpg'

const Cancellation = () => {
    return (
        <div className="container-fluid">
           
            <div>
               
                    <div className="row cancellation">
                        <div className="col-3">
                            <button className="button">בטל תור</button>
                        </div>
                        <div className="col-6 details">
                                <p>ביטול תור</p>
                                <p>שם התספרות</p>
                                <p>שעה </p>
                                <p>תאריך </p>
                            </div>
                            <div className="col-3">
                                <img className='images' src={colorhier} />
                            </div>
                        </div>
                    </div>
            </div>
        
    )
}





export default Cancellation









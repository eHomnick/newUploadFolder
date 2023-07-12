import React from "react";
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button, Toast } from 'react-bootstrap';
import colorhier from '../../Images/colorhier.jpg'
import "./Changingqueues.css"
const Changing = () => {
    return (
        <>
            <div>
                <div className="row cancellation">
                    <div className="col-3">
                        <div className="col-3">
                            <img className='images' src={colorhier} />
                        </div>
                    </div>
                    <div className="col-6 details">
                        <p>שם התספרות</p>
                        <p>שעה </p>
                        <p>תאריך </p>
                    </div>
                    <button className="button"> שנה </button>
                    <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">אי אפשר לשנות</strong>
                        </Toast.Header>
                        <Toast.Body>לא שינית תאריך או סוג תספורת </Toast.Body>
                    </Toast>
                </div>
            </div>



        </>
    )
}




export default Changing
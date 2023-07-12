import React from "react";
import sprey_hair from '../../../Images/sprey_hair.jpg'
import './Spreyhair.css'
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button, Toast } from 'react-bootstrap';



export default function Spreyhair() {
    return (

        <div>
            <img className='images' src={sprey_hair} />
            <p>ספרי שיער</p>
            <p>ספרי שיער מתיר קשרים </p>
            <p>מחיר: 60 ש"ח</p>
            
             <button className="button"><Nav.Link ><Link to='/ShoppingCart'>  הוסף לסל </Link></Nav.Link></button>
             <button className="button"><Nav.Link ><Link to='/ShoppingCart'>  לקניה  </Link></Nav.Link></button>
           
        </div>
    )
}





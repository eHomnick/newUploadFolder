import React from "react";
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button, Toast } from 'react-bootstrap';
import sprey_hair from '../../Images/sprey_hair.jpg'
import sprey_face from '../../Images/sprey_face.jpg'
import fen from '../../Images/fen.jpg'
import Hair_mask from '../../Images/Hair_mask.jpg'
import Care_case from '../../Images/Care_case.jpg'
import perfume from '../../Images/perfume.jpg'
import Silk_shampo from '../../Images/Silk_shampo.jpg'
import Moisturizer from '../../Images/Moisturizer.webp'
import gliding from '../../Images/gliding.webp'
import Hairdressers from '../../Images/Hairdressers.webp'
import shampoo from '../../Images/shampoo.webp'
import conditioner from '../../Images/conditioner.webp'
import './Shop.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
const Shop = () => {

    const [product, setProduct] = useState([]);
    useEffect(() => {
      axios.get(`localhost:3030/product/getAllProduct`).then((res) => {
        console.log(res.data)
      });
  
    }, [])
    return (
        <>
            <div className="container">

                <div className="row">
                    <div className=" col-4">
                        <img className='images' src={sprey_hair} />
                        <p>מתיר קשרים</p>
                        {/* <button className="button"> שנה </button> */}
                        <nav>
                            <Nav.Link ><Link to='/Spreyhair'> ראה מוצר</Link></Nav.Link>
                        </nav>
                    </div>
                    <div className=" col-4">
                        <img className='images col-4' src={sprey_face} />
                        <p>ספרי מגן לחות</p>
                        <nav>
                            <Nav.Link ><Link to='/Spreyface'> ראה מוצר</Link></Nav.Link>
                        </nav>
                    </div>
                    <div className=" col-4">
                        <img className='images ' src={fen} />
                        <p>פן</p>
                        <nav>
                            <Nav.Link ><Link to='/Fen'> ראה מוצר</Link></Nav.Link>
                        </nav>
                    </div>
                    <div className=" col-4">
                        <img className='images ' src={Hair_mask} /><br></br>
                        <p>מסכת שיער</p>
                    </div>
                    <div className=" col-4">
                        <img className='images ' src={Care_case} />
                        <p>ערכת טיפוח </p>
                    </div>
                    <div className=" col-4">
                        <img className='images' src={perfume} />
                        <p>בושם</p>
                    </div>
                    <div className=" col-4">
                        <img className='images' src={Silk_shampo} />
                        <p>שמפן משי</p>
                    </div>
                    <div className=" col-4">
                        <img className='images' src={Moisturizer} />
                        <p>קרם לחות</p>
                    </div>
                    <div className=" col-4">
                        <img className='images' src={gliding} />
                        <p>מחליק</p>
                    </div>
                    <div className=" col-4">
                        <img className='images' src={Hairdressers} />
                        <p>ספרי שיער</p>
                    </div>
                    <div className=" col-4">
                        <img className='images' src={shampoo} />
                        <p>שמפו לשיעור</p>
                    </div>
                    <div className=" col-4">
                        <img className='images' src={conditioner} />
                        <p>מרכך</p>
                    </div>

                </div>
            </div>
        </>
    )
}


export default Shop














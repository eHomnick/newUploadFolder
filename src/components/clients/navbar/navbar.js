import React from "react"
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button, Toast } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../../Images/4998317.jpg'



const NavbarClient = () => {
    return (
        <div className="container-fluid p-0">
        <div className="row d-flex justify-content-center">
            <img className="logo col-md-3" src={logo}></img>
        </div>
            <div className="row">
                <div className="col m-0">
                  
                    <Navbar bg="light" expand="lg" >
                        <Container fluid id="navbarScroll" >

                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav

                                    className="my-2 my-lg-0 mx-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link><Link to=''>דף הבית</Link></Nav.Link>
                                    <Nav.Link ><Link to='/Appointments'> אפציות שלנו</Link></Nav.Link>
                                    <Nav.Link ><Link to='/Myqueues'> התורים שלי</Link></Nav.Link>
                          
                                    <Nav.Link ><Link to='/Shop' className="link"> המוצרים שלנו</Link></Nav.Link>
                                    <Nav.Link ><Link to='/About'> אודות הסטודיו</Link></Nav.Link>
                                    <Nav.Link ><Link to='/Hairsylist'> הספרים שלנו</Link></Nav.Link>
                                </Nav>
                                {/* <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form> */}
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </div>
    )
}




export default NavbarClient



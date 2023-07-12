import React, { useState,useRef } from 'react'
import './Login.css'
import { Modal, Button, Container } from 'react-bootstrap'

import {Nav}  from 'react-bootstrap';
// import Link from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from '../../../redux/actions/userAction'
import { createNewUser } from '../../../redux/service';
import { connect } from 'react-redux';


export function MyModal(props) {
  const [user, setUser] = useState([]);
  const [name, setName] = useState([]);
  const [pass, setPass] = useState([]);
  




  
function Login()
{
  
  axios.get(`http://localhost:3030/user/login/`+name+`/`+pass).then((res) => {
    console.log((res.data));
     setUser(res.data)
    
  })
}


  return (
    <>
   
    <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          התחברות
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>הכנס שם משתמש וסיסמא</h4>
        <p>
        <label className='class' for='name'></label>
            <input id='name' type='text' placeholder='שם משתמש' onChange={(e) => {setName(e.target.value)}}/>
          <br /><br />
             <label for='password'></label>
            <input id='password' type='password' placeholder='סיסמא' onChange={(e) => {setPass(e.target.value)}}/>
            <br /><br />
     
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={()=>{props.onHide();Login()}}>enter</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

// export function connect (mapStateToProps,mapDispatchToProps) {( 
  function MyModal2(props) {
 const {onHide, createNewUser}=props;
 
 const [user,setuser]= useState({name:"",lastName:"",passwors:"",phone:"",emil:""});
 const dispatch = useDispatch()
 const userState = useSelector(state => state.user)

// const mapStateToProps = (state) =>{
//   return{

//   }
// }


// const mapDispatchToProps = (dispatch) =>{
//   return {
//     newUser: (user) =>dispatch(actions.createNewUser(user))
//   }
// }
 
 function save()
  { 
  onHide();
  }
  let nameRef=useRef();
  let lastnameRef=useRef();
  let phoneRef=useRef();
  let passwordRef=useRef();
  let emailRef=useRef();

  function SignUp(){
let user={
name:nameRef.current.value,
lastName:lastnameRef.current.value,
phone:phoneRef.current.value,
passwors:passwordRef.current.value,
emil:emailRef.current.value
}
axios.post(`http://localhost:3030/user/NewUser`,user).then(res=>{
if (res.data){
console.log(res.data);
alert("נרשמת בהצלחה!")
save()
  }
  else{
    alert("לא עובד")
  }
}
)
  }
    
function update(e)
{
  setuser({ ...user, [e.target.name]: e.target.value })
}
  return (
    <>
    <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          הירשם
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>הכנס פרטים אישיים</h4>
        <p>
        <label className='class' for='firstname'></label>
            <input ref={nameRef} name='name' id='firstname' type='text' placeholder='שם פרטי ' />
            <br /><br />
            <label  for='lastname'></label>
            <input   ref={lastnameRef} name='lastName'  id='lastname' type='text' placeholder='שם משפחה  ' />
            <br /><br />
             <label for='password' ></label>
            <input  ref={passwordRef} name='passwors'  id='password' type='password' placeholder='צור סיסמא' />
            <br /><br />
            <label for='tel' ></label>
            <input ref={phoneRef} name='phone'  id='tel' type='tel' placeholder='טלפון' />
            <br /><br />
            <label for='email' ></label>
            <input name='emil' ref={emailRef}  id='email' type='email' placeholder='הכנס איימיל' />
            <br /><br />
     
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={SignUp}>enter</Button>
      </Modal.Footer>
    </Modal>
    </>
  )}



export default function Login() {
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);




  return (
    <>
    <Container className="home m-0 d-flex justify-content-center">
      <div className='row login d-flex justify-content-center pt-5'>
        <div className='mt-5'>
      <Button    id="sarah" className="boton a" onClick={() => setModalShow1(true)}>
        התחברות
      </Button> &nbsp;
      <Button  className="boton a" onClick={() => setModalShow2(true)}>
        הרשמה 
      </Button>
      <MyModal
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />

<MyModal2
        show={modalShow2}
        onHide={() => setModalShow2(false)}



        
      />
      <br></br><br></br>
       <button className='boton'>
        <Nav.Link >
          <Link to='/Employee' className="a">הכנס בתור עובד</Link> 
       </Nav.Link>
       </button>
       </div>
       </div>
     </Container>
    </>
  )
}



















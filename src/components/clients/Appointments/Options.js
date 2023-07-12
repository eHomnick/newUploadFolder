import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import './Options.css'
import miss from '../../Images/miss.jpg'
import colorhier from '../../Images/colorhier.jpg'
import logo from '../../Images/logo.jpg'
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux'
import { setAllOptions } from '../../../redux/actions/userAction'


function mapStatetoProps(state) {
  return {
    allTheOptions: state.user.allOptions
  }
}


//options in the studio
export default connect(mapStatetoProps)(function Buttons(props) {
  const [addnew, setaddnew] = useState()
  const { allTheOptions, dispatch } = props
  useEffect(() => {
    axios.get(`http://localhost:3030/option/getAllOption`).then((res) => {
      console.log(res.data)
      dispatch(setAllOptions(res.data.option))
    });
  }, [])

  const setaddneww = () => {
    setaddnew(true)
  }


  return (



    <>

      <div className="container" >
        <h1>בחר תספורת</h1>
        <div className="row d-flex justify-content-around">
          {/* כל התוכן */}
          <div className="col-8">
            <div className="container">
              {/* <div className="row">
                <img className='images' src={logo} />
              </div> */}

              <div className="row">
                {allTheOptions && allTheOptions.length ? allTheOptions.map((object, i) => (
                  // <ObjectRow obj={object} key={i} />
                  <div className=" col-lg-4 col-sm-6 detailDiv">
                    {/* <img className='images' src={object.img} /> */}

                    <br />
                    <button className='boton'> קביעת תור
                      {/* <Nav.Link ><Link to='/Colorhier' state={object}> {object.name}</Link></Nav.Link> */}

                    </button>
                    {/* {object.cooperate?object.cooperate.map((s)=>(<p>{s.Last_Name} {s.Name}</p>)):""}  */}
                  </div>

                )) : <>אין אופציות קיימות במערכת </>}
              </div>

            </div>
          </div>
        </div>
      </div>



      <Button onClick={setaddneww}>הוסף הצעת תספורת חדשה</Button>
      <div hidden={!addnew}>
        <InputExport setaddnew={setaddnew} />


      </div>
    </>

  )

})









//להוספת אופציה חדשה להצעה - משהו שלא קיים והמנהל יצטרך לאשר את ההצעות ולהכניס למאגר
//כרגע מוסף אוטומטית וניתן מיד להשתמש - אם יש עובדים שמתמחים בזה
function Input(props) {
  const [Name, setName] = useState()
  const [Description, setDescription] = useState()
  const [Price, setPrice] = useState()
  const [Duration, setDuration] = useState()

  const { dispatch, setaddnew } = props


  const saveNewOption = () => {
    debugger

    axios.post('http://localhost:3030/option/NewOption', {
      Name, Description, Price, Duration

    }).then((res) => {
      debugger
      console.log(res.data);
      dispatch(setAllOptions(res.data.allOptions))
      setaddnew(false)

    })
  }
  return (
    <>
      {/* <Form onSubmit={saveNewOption}> */}
      <Form.Control type="text" onChange={(e) => { setName(e.target.value) }} placeholder="שם" />
      <Form.Control type="text" onChange={(e) => { setDescription(e.target.value) }} placeholder='תיאור' />
      <Form.Control type="text" onChange={(e) => { setDuration(e.target.value) }} placeholder='משך זמן בדקות' />
      <Form.Control type="text" onChange={(e) => { setPrice(e.target.value) }} placeholder='מחיר' />
      <Button onClick={saveNewOption} type={'submit'}>שמור</Button>
      {/* </Form> */}
    </>
  );
}

const InputExport = connect()(Input)






















import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useLocation } from 'react-router-dom'
import colorhier from '../../../Images/colorhier.jpg'
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
// import Calendar from "react-calendar";
export default function Colorheir() {
    // const [startDate, setStartDate] = useState(new Date());
    // const [andDate, setEndDate] = useState(new Date());

    const [startDate, setStartDate] = useState(new Date("2014/02/08"));
    // const [endDate, setEndDate] = useState(new Date("2014/02/10"));
    let location = useLocation()
    console.log(location.state)
    function getValue(e) {

        console.log(e);
        setStartDate(e)
    }

    const [Newappointment, setNewappointment] = useState({
        user:"63220c3049f16ab171643e0b",
        date:startDate,
        option:location.state._id
    });
    function saveappointment()
        {      
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Newappointment)
            };
            console.log(Newappointment)
            fetch('http://localhost:3030/appointment/Newappointment', requestOptions)
                .then(response => response.json())
                .then(alert("התור נקבע בהצלחה"));

    }
    
  
    
 

    return (

        <div>
            <p>{location.state.name} </p>
            <p>{location.state.description}</p>
<select>
    {location.state.cooperate.map((s,o)=>(
    <option>{s.Last_Name} {s.Name}</option>))}
</select>
            {/* {location.state.cooperate?location.state.cooperate.map((s,o)=>(<p>{s.Last_Name} {s.Name}</p>)):""}  */}
          
            <A setStartDate={getValue} startDate={startDate} />

            {/* <Calendar onClickDay={(e) => { }}></Calendar> */}
            <br></br><br></br>
            <button className="button" onClick={saveappointment}> לקביעת תור</button>

        </div>
    )
}

const A = (props) => {
    let times = ["13:30:00", "14:00:00"]
    const { startDate, setStartDate } = props
    let dates = "";
    // [new Date(2022,09,12)]
    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            value={times}
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
        // startDate={startDate}
        // endDate={endDate}

        />
    );
};












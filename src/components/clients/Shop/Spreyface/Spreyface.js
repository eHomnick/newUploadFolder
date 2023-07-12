import React from "react";
import sprey_face from '../../../Images/sprey_face.jpg'
import './Spreyface.css'


export default function Spreyface() {
    return (

        <div>
            <img className='images' src={sprey_face} />
            <p> ספרי מגן לחות</p>
            <p>ספרי לחות מגן על עור הפנים    </p>
            <p>מחיר: 50 ש"ח</p>
            <button className="button"> הוסף לסל  </button>
            <button className="button"> לקניה   </button>
        </div>
    )
}


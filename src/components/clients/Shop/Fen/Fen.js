import React from "react";
import fen from '../../../Images/fen.jpg'
import './Fen.css'


export default function Fen() {
    return (

        <div>
            <img className='images' src={fen} />
            <p> פן לשיער</p>
            <p>פן לשיער/ מיבש שיער   </p>
            <p>מחיר: 350 ש"ח</p>
            <button className="button"> הוסף לסל  </button>
            <button className="button"> לקניה   </button>
        </div>
    )
}

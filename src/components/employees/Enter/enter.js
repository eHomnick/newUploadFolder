import React from 'react'



export default function password() {
    return (

        <div>
            
            <h4>הכנס שם משתמש וסיסמא</h4>
        <p>
        <label className='class' for='name'></label>
            <input id='name' type='text' placeholder='שם משתמש' />
          <br /><br />
             <label for='password'></label>
            <input id='password' type='password' placeholder='סיסמא' />
            <br /><br />
     
        </p>
        <button className='boton'>היכנס</button>
        </div>
    )

    }



import React from 'react'
import '../Styles/Signup.css'
import { useState } from 'react'

const strengthLabels = ['weak', 'medium', 'strong']

const Signup = () => {
  const [strength, setStrength] = useState("");
  const getStrength = (password) => {let strengthIndicator = -1, 
  lower = false,
  upper = false,
  numbers = false;
  for (
  let index = 0; index < password.length; index++
  ) { const char = password.charCodeAt (index);
  if (!upper && char >= 65 && char <= 90) {
    if(password.length > 7){
      upper = true;
      strengthIndicator++;
    }
  }
  if (!numbers && char >= 48 && char <= 57) {
    if(password.length > 4){
      numbers = true;
      strengthIndicator++;
    }
  }
  if (!lower && char >= 97 && char <= 122) {
    lower = true;
    strengthIndicator++;
    
  }
  }
    setStrength(strengthLabels [strengthIndicator]);
  };
  const handleChange = (evt) => getStrength(evt.target.value);


  return (
    <div className='signUp'>
        <div className="containerSignUp">
            <div className="img"/>
            <h3>Sign Up</h3>
            <form action="">
              <h6>Correo electronico:</h6>
              <input type="email" name="correo" id="correo" 
              placeholder="Correo electronico"/>

              <h6>Contraseña:</h6>
              <input name="password" spellCheck="false"
              type="password" placeholder="Contraseña"
              onChange={evt => handleChange(evt)}/>

              <div className={`bars ${strength}`}>
                <div></div>
              </div>
              <div className="strength">{strength &&<>{strength} password</>}</div>
              
              <input type="button" value="Iniciar sesión" />
            </form>
        </div>
    </div>
  )
}

export default Signup
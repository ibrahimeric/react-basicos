import React from 'react'
import '../Styles/Signup.css'
import { useState } from 'react'

const Signup = () => {
  /* Declaramos la constante strengthLabels para indicar la seguridad de una contraseña */
  const strengthLabels = ['debil', 'mediana', 'fuerte']
  /* Declaramos la constante strength a la cual le asignamos un valor nulo*/
  const [strength, setStrength] = useState("");

  /* Declaramos la constante getStrenght que obtiene como parametro la contraseña ingresada por el usuario y establece el valor de strength de acuerdo a la seguridad de la contraseña ingresada */
  const getStrength = (password) => {
    /* Declaramos la variable strengthIndicator y le asignamos el valor -1 y las variables lower, upper y numbers a las cuales le asignamos el valor false */
    let strengthIndicator = -1, 
    lower = false,
    upper = false,
    numbers = false;
    
    for (let i = 0; i < password.length; i++){
      const char = password.charCodeAt (i);
      if (!upper && char >= 65 && char <= 90) {
        if(strengthIndicator === -1 || password.length > 7){
          upper = true;
          strengthIndicator++;
        }
      }
      if (!numbers && char >= 48 && char <= 57) {
        if(strengthIndicator === -1 || password.length > 4){
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


  return (
    <div className='signUp'>
        <div className="containerSignUp">
            <div className="img"/>
            <h3>Inicio de sesión</h3>
            <form action="">
              <h6>Correo electronico:</h6>
              <input type="email" name="correo" id="correo" 
              placeholder="Correo electronico"/>

              <h6>Contraseña:</h6>
              <input name="password" spellCheck="false"
              type="password" placeholder="Contraseña"
              onChange={evt => getStrength(evt.target.value)}/>

              <div className={`bars ${strength}`}>
                <div></div>
              </div>
              <div className="strength">{strength &&<>Contraseña {strength}</>}</div>
              
              <input type="button" value="Iniciar sesión" />
            </form>
        </div>
    </div>
  )
}

export default Signup
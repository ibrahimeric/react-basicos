import React from 'react'
import '../Styles/Register.css'
// Importamos el Hook useState
import { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [incorrect, setIncorrect] = useState(false);
  /* Declaramos la constante strengthLabels para indicar la seguridad de una contraseña */
  const strengthLabels = ['debil', 'mediana', 'fuerte']
  /* Declaramos la constante strength a la cual le asignamos un valor nulo*/
  const [strength, setStrength] = useState("");

  const getStrength = (password) => {
    /* Declaramos la variable strengthIndicator y le asignamos el valor -1 y las variables lower, upper y numbers a las cuales le asignamos el valor false */
    let strengthIndicator = -1,
    lower = false,
    upper = false,
    numbers = false;
    /* Con este for recorremos una por una todas las letras de la contraseña ingresada por el usuario. */
    for (let i = 0; i < password.length; i++){
      /* Declaramos la constante char en la que vamos a almacenar el valor unicode de las letras una a la vez. */
      const char = password.charCodeAt (i);
      /* En este if comprobamos si la variable upper es false y si el valor unicode almacenado en char corresponde a una letra mayuscula. */
      if (!upper && char >= 65 && char <= 90) {
        /* En este if verificamos la longitud de la contraseña es mayor a 4 o si el valor almacenado en strengthIndicator es igual a -1 lo que significa que todavia no se indicó la seguridad de la contraseña. En caso de cumplirse una de estas condiciones se incrementa en 1 el valor de la variable strengthIndicator */
        upper = true;
        strengthIndicator++;
      }
      /* En este if comprobamos si la variable numbers es false y si el valor unicode almacenado en char corresponde a un numero. */
      if (!numbers && char >= 48 && char <= 57) {
        /* En este if verificamos la longitud de la contraseña es mayor a 7 o si el valor almacenado en strengthIndicator es igual a -1 lo que significa que todavia no se indicó la seguridad de la contraseña. En caso de cumplirse una de estas condiciones se incrementa en 1 el valor de la variable strengthIndicator */
        numbers = true;
        strengthIndicator++;
      }
      /* En este if comprobamos si la variable lower es false y si el valor unicode almacenado en char corresponde a una letra minuscula. */
      if (!lower && char >= 97 && char <= 122) {
        lower = true;
        strengthIndicator++;
      }
    }
    /* Asignamos a la constante strength el nivel de seguridad de la contraseña dependiendo del valor de strengthIndicator. */
    if(strengthIndicator === 2 && password.length < 8)
      strengthIndicator = strengthIndicator - 1;
    if(strengthIndicator === 1 && password.length < 5)
      strengthIndicator = strengthIndicator - 1;
    
    setStrength(strengthLabels[strengthIndicator]);
  };




  function changePassword(evt){
    getStrength(evt.target.value)
    inputChange(evt)
  }

  const [body, setBody] = useState({username: '', password: ''});
  
  const inputChange = ({target}) => {
    setIncorrect(false)
    const {name, value} = target
    setBody({
      ...body,
      [name]: value
    })
  }

  const navigate = useNavigate();
  
  const onSubmit=()=>{
    if(body.password.length < 8){
      setIncorrect(true)
      return
    }
    axios.post('http://localhost:5000/api/register', body)
    .then(({data}) => {
      if(data.toString() === 'existent'){
        setIncorrect(true)
        localStorage.setItem('token', '')
        return
      }
      localStorage.setItem('token', data.token)
      navigate("/");
    })
    .catch(() => {
      setIncorrect(true)
      localStorage.setItem('token', '')
    })
  }









  
  return (
    <div className='Register'>
        <div className="containerRegister">
            <div className="img"/>
            <h3>Crea una cuenta</h3>
            
            <form action="">

              <h6>Usuario:</h6>
              <input 
              type="text"  
              id="username" 
              name="username" 
              onChange={inputChange}
              placeholder="Usuario"/>

              <h6>Contraseña: <span>(Debe ser mayor a 8 caracteres)</span></h6>
              {/* Con el evento onChange llamamos a la constante getStrength cada vez que se realiza un cambio en el contenido del input */}
              <input 
              name="password" 
              spellCheck="false"
              type="password" 
              // value={loginData.password}
              placeholder="Contraseña"
              // onChange={evt => changePassword(evt)}
              onChange={evt => changePassword(evt)}/>

              {/* Asignamos una clase con el nombre almacenado en la constante strength */}
              <div className={`bars ${strength}`}>
                <div></div>
              </div>
              {/* Indicamos la seguridad de la contraseña mostrando la palabra contraseña seguido del valor de la variable strength */}
              <div className="strength">{strength &&<>Contraseña {strength}</>}</div>
              <div className={`incorrectRegister ${incorrect? 'activeincorrectRegister': ''}`}>Usuario existente o contraseña demasiado corta.</div>
              <input 
              type="button" 
              value="Registrarse" 
              onClick={onSubmit}/>
            </form>
            <p className='RLogin'>¿Ya tienes cuenta? <Link to={"/login"}>Inicia sesión</Link></p>
        </div>
    </div>
  )
}

export default Signup
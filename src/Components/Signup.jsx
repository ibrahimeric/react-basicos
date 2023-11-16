import React, { useState } from 'react'
import '../Styles/Signup.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [incorrect, setIncorrect] = useState(false);

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
    axios.post('http://localhost:5000/login', body)
    .then(({data}) => {
      if(data.toString() === 'false'){
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
    <div className='signUp'>
        <div className="containerSignUp">
            <div className="img"/>
            <h3>Inicio de sesión</h3>
            <form action="">
              <h6>Usuario:</h6>
              <input 
              type="text"  
              id="username" 
              name="username" 
              onChange={inputChange}
              placeholder="Usuario"/>

              <h6>Contraseña:</h6>
              {/* Con el evento onChange llamamos a la constante getStrength cada vez que se realiza un cambio en el contenido del input */}
              <input 
              name="password" 
              spellCheck="false"
              type="password" 
              placeholder="Contraseña"
              onChange={inputChange}/>
              <div className={`incorrectLogin ${incorrect? 'activeincorrectLogin': ''}`}>Usuario o contraseña incorrecto</div>
              <input 
              type="button" 
              value="Iniciar sesión" 
              onClick={onSubmit}/>
            </form>
            <p className='LRegister'>¿Aún no tienes cuenta? <Link to={"/register"}>Registrate</Link></p>
        </div>
    </div>
  )
}

export default Signup
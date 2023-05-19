import React from 'react'
import '../Styles/Tp1.css';
import { useState } from 'react'; /* Hooks */

function Tp1() {

    const [contador, setContador] = useState(0) /* contador = variable y set manipula variable */

    const [nombre, setNombre] = useState("Eric")

    function incrementar() {
        setContador(contador + 1)

        if (contador === 10) {
            alert("hola");
        }
    }
    
    const decrementar = () => {
        if (contador > 0) setContador(contador - 1);
    }
    const reiniciar = () => {
        setContador(0);
    };

    return (
        <div>
            <h1>TP1 ProgramacionIII</h1>
            <br />
            <button className='btn btn-primary' onClick = {incrementar}>
                INCREMENTAR</button>

            <button className='btn btn-danger' onClick = {decrementar}>
                RESTAR</button>

            <button className='btn btn-warning' onClick = {reiniciar}>
                REINICIAR</button>

            <br />
            contador={contador}
            <br />
            setContador={setContador}
            <br />
            nombre={nombre}
            <br />
            setNombre={setNombre}
        </div>
    );
}

export default Tp1


import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../Styles/Compras.css'
import { useNavigate } from 'react-router-dom';
const moment = require('moment');

const Compras = () => {
    const [shopping, setShopping] = useState({});
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);

    const [detailsModal, setDetailsModal] = useState({});
    const [shoppingModal, setShoppingModal] = useState({});

    useEffect(() => {
        const purchasingData = async () => {
            // En caso de querer que funcione en el telefono cambiar localhost por la ip de la Pc de la siguiente manera:
            // let dataResponse = await axios.get('http://193.158.3.10:5000/productos')
            await axios.get('http://localhost:5000/get_purchases', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(({data}) => {
                if(data.toString() === 'inexistente'){
                    alert('Su sesión expiró.\nDebe inicar sesión nuevamente para poder continuar.')
                    navigate("/login");
                    return
                }
                setShopping(data[0])
            })
            .catch(() => {
                alert('Ocurrió un error inesperado.\nPor favor intente mas tarde.')
            })
        };
        purchasingData();
    }, []);

    const seeDetails = async (buys) => {
        let id_venta = buys.id
        const body = {id_venta}
        await axios.post('http://localhost:5000/get_purchasing_details', body, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(({data}) => {
            if(data.toString() === 'inexistente'){
                alert('Su sesión expiró.\nDebe inicar sesión nuevamente para poder continuar.')
                navigate("/login");
                return
            }
            setShoppingModal(buys)
            setDetailsModal(data[0])
            setModal(true)
        })
        .catch(() => {
            alert('Ocurrió un error inesperado.\nPor favor intente mas tarde.')
        })
    }
    return (
        <div className='compras'>
            <h1>Mis Compras</h1>
            <hr />
            <div className="record_compras">
                {shopping.length ? shopping.map(buys => (
                    // Creamos un div y le añadimos la clase card y el id del buyso con buys.id
                    <div className="container_compra" key={buys.id}>
                        <div className="date_compra">
                            <p>{moment(buys.fecha).format('DD-MM-YYYY HH:mm:ss')}</p>
                        </div>
                        <div className="info_compra">
                            <p>Nº Compra: {buys.id}</p>
                            <p>Total: ${buys.total}</p>
                            <button onClick={() => seeDetails(buys)}>Ver compra</button>
                        </div>
                    </div>
                )): (
                    <div className="productNotFound">
                        <h1>Aún no realizaste compras.</h1>
                    </div>
                )}
            </div>



            {/* Formulario de contacto */}
            {/* Se comprueba si contacto es true. En caso de cumplirse la condicion se asigna la clase para mostrar el formulario de contacto. */}
            <div className={`container_modal_details ${modal? 'activecontainerModal' : ''}`}>
                <div className="container_details">
                    <div className={`modal_details ${modal? 'activeModal' : ''}`}>
                        {/* Este svg es la X y al precionarla cierra el formulario de contacto. */}
                        <svg xmlns="http://www.w3.org/2000/svg"
		                	fill="none"
		                	viewBox="0 0 24 24"
		                	strokeWidth="1.5"
		                	stroke="currentColor"
		                	className="Hicon_close_details"
                            onClick={() => setModal(false)}>
		                	<path
		                		strokeLinecap="round"
		                		strokeLinejoin="round"
		                		d="M6 18L18 6M6 6l12 12"
		                	/>
		                </svg>

                        {shoppingModal ? (
                            <div className="modal_container_compra">
                                <div className="modal_info_compra">
                                    <p>Fecha: {moment(shoppingModal.fecha).format('DD-MM-YYYY HH:mm:ss')}</p>
                                    <p>Nº Compra: {shoppingModal.id}</p>
                                    <p>Total: ${shoppingModal.total}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="productNotFound">
                                <h1>Aún no realizaste compras.</h1>
                            </div>
                        )}

                        <div className="purchase_details_container">
                            {detailsModal.length ? detailsModal.map(details => (
                            // Creamos un div y le añadimos la clase card y el id del buyso con buys.id
                            <div className="container_detail" key={details.id}>
                                <div className="info_detail">
                                    <p>{details.nombre}</p>
                                    <p>Precio: ${details.precio}</p>
                                    <p>Cantidad: {details.cantidad}</p>
                                </div>
                            </div>
                            )): (
                                <div className="not_found_details">
                                    <h1>Aún no realizaste compras.</h1>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Compras
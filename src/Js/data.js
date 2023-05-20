// Importamos las imagenes que vamos a utilizar
import air_jordan1 from '../img/air_jordan1.jpg';
import short_boca from '../img/short_boca.webp'
import nike_airmax97 from '../img/nike_airmax97.jpg'
import short_adidas from '../img/short adidas.webp'
import short_nike from '../img/short nike.png'
import campera_nike from '../img/campera_nike.jpg'
import adidas_dayjogger from '../img/adidas_dayjogger.jpg'
import chaleco_columbia from '../img/chaleco_hombre_columbia.webp'

export const data = [
    {
        // Aqui indicamos el id que debe ser siempre distinto ya que con ese numero sabemos cual producto seleccionó el usuario y debemos 
        // agregar al carrito. De lo contrario ocurriran errores.
        id:1,
        // Aqui indicamos las categorias del producto
        categoria: 'oferta zapatillas',
        // Aqui indicamos el nombre del producto
        nameProduct: 'AIR JORDAN 1',
        // Aqui colocamos el precio sin signo peso, solo el número
        price: 1200,
        // Aqui colocamos la ruta de la imagen
        urlImage: air_jordan1,
        // quantity es la cantidad. Debe ser siempre "1" para que se sume un producto al carrito al seleccionarlo.
        quantity: 1,
    },
    {
        id:2,
        categoria: 'oferta zapatillas',
        nameProduct: 'NIKE AIRMAX 97',
        price: 37000,
        urlImage: nike_airmax97,
        quantity: 1,
    },
    {
        id:3,
        categoria: 'oferta short',
        nameProduct: 'Short Adidas BOCA',
        price: 12002,
        urlImage: short_boca,
        quantity: 1,
    },
    {
        id:4,
        categoria: 'oferta shorts',
        nameProduct: 'Short ADIDAS',
        price: 7303,
        urlImage: short_adidas,
        quantity: 1,
    },
    {
        id:5,
        categoria: 'oferta shorts',
        nameProduct: 'Short NIKE',
        price: 4203,
        urlImage: short_nike,
        quantity: 1,
    },
    {
        id:6,
        categoria: 'oferta camperas',
        nameProduct:'Campera NIKE', //cola
        price: 10203,
        urlImage:campera_nike ,
        quantity: 1,
    },
    {
        id:7,
        categoria: 'oferta zapatillas',
        nameProduct: 'Zapatillas ADIDAS',
        price: 15203,
        urlImage: adidas_dayjogger,
        quantity: 1,
    },
    {
        id:8,
        categoria: 'oferta camperas',
        nameProduct: 'Chaleco COLUMBIA',
        price: 30203,
        urlImage: chaleco_columbia,
        quantity: 1,
    },
];

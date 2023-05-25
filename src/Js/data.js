// Importamos las imagenes que vamos a utilizar
import air_jordan1 from '../img/air_jordan1.jpg';
import pantalon from '../img/pantalon.webp';
import nike_airmax97 from '../img/nike_airmax97.jpg'
import short_adidas from '../img/short adidas.webp'
import short_nike from '../img/short nike.png'
import campera_nike from '../img/campera_nike.jpg'
import adidas_dayjogger from '../img/adidas_dayjogger.jpg'
import chaleco_columbia from '../img/chaleco_hombre_columbia.webp'

// PANTALONES
import pantalon01 from '../img/Pantalones/pantalon01.webp';
import pantalon02 from '../img/Pantalones/pantalon02.webp';
import pantalon03 from '../img/Pantalones/pantalon03.webp';
import pantalon04 from '../img/Pantalones/pantalon04.webp';
import pantalon05 from '../img/Pantalones/pantalon05.webp';
import pantalon06 from '../img/Pantalones/pantalon06.webp';
import pantalon07 from '../img/Pantalones/pantalon07.webp';
import pantalon08 from '../img/Pantalones/pantalon08.webp';
import pantalon09 from '../img/Pantalones/pantalon09.webp';
import pantalon10 from '../img/Pantalones/pantalon10.webp';
import pantalon11 from '../img/Pantalones/pantalon11.webp';
import pantalon12 from '../img/Pantalones/pantalon12.webp';
import pantalon13 from '../img/Pantalones/pantalon13.webp';
import pantalon14 from '../img/Pantalones/pantalon14.webp';
import pantalon15 from '../img/Pantalones/pantalon15.webp';
import pantalon16 from '../img/Pantalones/pantalon16.webp';
import pantalon17 from '../img/Pantalones/pantalon17.webp';
import pantalon18 from '../img/Pantalones/pantalon18.webp';
import pantalon19 from '../img/Pantalones/pantalon19.webp';
import pantalon20 from '../img/Pantalones/pantalon20.webp';

export const data = [
    {
        // Aqui indicamos el id que debe ser siempre distinto ya que con ese numero sabemos cual producto seleccionó el usuario y debemos 
        // agregar al carrito. De lo contrario ocurriran errores.
        id:1,
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
        nameProduct: 'NIKE AIRMAX 97',
        price: 37000,
        urlImage: nike_airmax97,
        quantity: 1,
    },
    {
        id:3,
        nameProduct: 'Pantalon PAMPERO',
        price: 12002,
        urlImage: pantalon,
        quantity: 1,
    },
    {
        id:4,
        nameProduct: 'Short ADIDAS',
        price: 7303,
        urlImage: short_adidas,
        quantity: 1,
    },
    {
        id:4,
        nameProduct: 'Short NIKE',
        price: 4203,
        urlImage: short_nike,
        quantity: 1,
    },
    {
        id:4,
        nameProduct:'Campera NIKE', //cola
        price: 10203,
        urlImage:campera_nike ,
        quantity: 1,
    },
    {
        id:4,
        nameProduct: 'Zapatillas ADIDAS',
        price: 15203,
        urlImage: adidas_dayjogger,
        quantity: 1,
    },
    {
        id:4,
        nameProduct: 'Chaleco COLUMBIA',
        price: 30203,
        urlImage: chaleco_columbia,
        quantity: 1,
    },


    // PANTALONES
    {
        id: 1,
        nameProduct: 'Pantalón Toledo de gabardina Classic fit',
        price: 29500,
        urlImage: pantalon01,
        quantity: 1,
    },
    {
        id: 1,
        nameProduct: 'Jogging Den Slim fit',
        price: 24000,
        urlImage: pantalon02,
        quantity: 1,
    },
    {
        id: 1,
        nameProduct: 'Pantalón Copernico de gabardina Modern fit',
        price: 29500,
        urlImage: pantalon03,
        quantity: 1,
    },
    {
        id: 1,
        nameProduct: 'Pantalón Copernico de gabardina Modern fit',
        price: 29500,
        urlImage: pantalon04,
        quantity: 1,
    },

    {
        id: 1,
        nameProduct: 'Jogging Distracter',
        price: 24000,
        urlImage: pantalon05,
        quantity: 1,
    },
    {
        id: 1,
        nameProduct: 'Pantalón Toledo de gabardina Classic fit',
        price: 29500,
        urlImage: pantalon06,
        quantity: 1,
    },
    {
        id: 1,
        nameProduct: 'Pantalón Toledo de gabardina Classic fit',
        price: 29500,
        urlImage: pantalon07,
        quantity: 1,
    },
    {
        id: 1,
        nameProduct: 'Pantalón Abbey de gabardina Classic fit',
        price: 29500,
        urlImage: pantalon08,
        quantity: 1,
    },
    {
        id: 1,
        nameProduct: 'Pantalón Fulton de gabardina Modern fit',
        price: 29500,
        urlImage: pantalon09,
        quantity: 1,
    },
    {
        id: 1,
        nameProduct: 'Pantalón Abbey de gabardina Classic fit',
        price: 29500,
        urlImage: pantalon10,
        quantity: 1,
    },
    {
        id: 1,
        nameProduct: 'Pantalón Krim Pinzado de gabardina Modern fit',
        price: 29500,
        urlImage: pantalon11,
        quantity: 1,
    },
    {
        id: 1,
        nameProduct: 'Pantalón Krim Pinzado de gabardina Modern fit',
        price: 29500,
        urlImage: pantalon12,
        quantity: 1,
    },
    {
        id: 1,
        nameProduct: 'Pantalón Copernico de gabardina Modern fit',
        price: 29500,
        urlImage: pantalon13,
        quantity: 1,
    },
    {
        id: 1,
        nameProduct: 'Pantalón Zumo de gabardins Slim fit',
        price: 29500,
        urlImage: pantalon14,
        quantity: 1,
    },
    {
        id: 1,
        nameProduct: 'Pantalón Krim Pinzado de gabardina Modern fit',
        price: 29500,
        urlImage: pantalon15,
        quantity: 1,
    },
    {
        id: 1,
        nameProduct: 'Pantalón Buster Modern Fit',
        price: 22000,
        urlImage: pantalon16,
        quantity: 1,
    },
    {
        id: 1,
        nameProduct: 'Pantalón Krim Pinzado de gabardina Modern fit',
        price: 29500,
        urlImage: pantalon17,
        quantity: 1,
    },
    {
        id: 1,
        nameProduct: 'Pantalón Fulton de gabardina Modern fit',
        price: 29500,
        urlImage: pantalon18,
        quantity: 1,
    },
    {
        id: 1,
        nameProduct: 'Jogging Ben Modern Fit',
        price: 24000,
        urlImage: pantalon19,
        quantity: 1,
    },
    {
        id: 1,
        nameProduct: 'Jogging Distracter',
        price: 24000,
        urlImage: pantalon20,
        quantity: 1,
    },
];

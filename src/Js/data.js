// Importamos las imagenes que vamos a utilizar
import air_jordan1 from '../img/air_jordan1.jpg';
import short_boca from '../img/short_boca.webp'
import nike_airmax97 from '../img/nike_airmax97.jpg'
import short_adidas from '../img/short adidas.webp'
import short_nike from '../img/short nike.png'
import campera_nike from '../img/campera_nike.jpg'
import adidas_dayjogger from '../img/adidas_dayjogger.jpg'
import chaleco_columbia from '../img/chaleco_hombre_columbia.webp'
import campera1 from '../img/imgCamperas/campera 1.webp'
import campera2 from '../img/imgCamperas/campera 2.webp'
import campera3 from '../img/imgCamperas/campera 3.webp'
import campera4 from '../img/imgCamperas/campera 4.webp'
import campera5 from '../img/imgCamperas/campera 5.webp'
import campera6 from '../img/imgCamperas/campera 6.webp'
import campera7 from '../img/imgCamperas/campera 7.webp'
import campera8 from '../img/imgCamperas/campera 8.webp'
import campera9 from '../img/imgCamperas/campera 9.webp'
import campera10 from '../img/imgCamperas/campera 10.webp'
import campera11 from '../img/imgCamperas/campera 11.webp'
import campera12 from '../img/imgCamperas/campera 12.webp'
import campera13 from '../img/imgCamperas/campera 13.webp'


export const data = [
    {
        // Aqui indicamos el id que debe ser siempre distinto ya que con ese numero sabemos cual producto seleccionó el usuario y debemos 
        // agregar al carrito. De lo contrario ocurriran errores.
        id:1,
        // Aqui indicamos las categorias del producto
        categoria: 'ofertas zapatillas',
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
        categoria: 'ofertas zapatillas',
        nameProduct: 'NIKE AIRMAX 97',
        price: 37000,
        urlImage: nike_airmax97,
        quantity: 1,
    },
    {
        id:3,
        categoria: 'ofertas short',
        nameProduct: 'Short Adidas BOCA',
        price: 12002,
        urlImage: short_boca,
        quantity: 1,
    },
    {
        id:4,
        categoria: 'ofertas shorts',
        nameProduct: 'Short ADIDAS',
        price: 7303,
        urlImage: short_adidas,
        quantity: 1,
    },
    {
        id:5,
        categoria: 'ofertas shorts',
        nameProduct: 'Short NIKE',
        price: 4203,
        urlImage: short_nike,
        quantity: 1,
    },
    {
        id:6,
        categoria: 'ofertas camperas',
        nameProduct:'Campera NIKE', //cola
        price: 10203,
        urlImage:campera_nike ,
        quantity: 1,
    },
    {
        id:7,
        categoria: 'ofertas zapatillas',
        nameProduct: 'Zapatillas ADIDAS',
        price: 15203,
        urlImage: adidas_dayjogger,
        quantity: 1,
    },
    {
        id:8,
        categoria: 'ofertas camperas',
        nameProduct: 'Chaleco COLUMBIA',
        price: 30203,
        urlImage: chaleco_columbia,
        quantity: 1,
    },
    {
        id: 9,
        categoria: 'camperas',
        nameProduct: 'Campera coatsmen Neopren Térmica',
        price: 14200,
        urlImage: campera1,
        quantity: 1,
    },
    {
        id: 10,
        categoria: 'camperas',
        nameProduct: 'Campera Sico Urban Con Capucha',
        price: 16500,
        urlImage: campera2,
        quantity: 1,
    },
    {
        id: 11,
        categoria: 'camperas',
        nameProduct: 'Campera Polar Cuello Alto',
        price: 9900,
        urlImage: campera3,
        quantity: 1,
    },
    {
        id: 12,
        categoria: 'camperas',
        nameProduct: 'Campera Térmica Redufit',
        price: 10900,
        urlImage: campera4,
        quantity: 1,
    },
    {
        id: 13,
        categoria: 'camperas',
        nameProduct: 'Campera Capucha Gol de Oro',
        price: 5850,
        urlImage: campera5,
        quantity: 1,
    },
    {
        id: 14,
        categoria: 'camperas',
        nameProduct: 'Camperas Gabytex Tipo Canguro',
        price: 5199,
        urlImage: campera6,
        quantity: 1,
    },
    {
        id: 15,
        categoria: 'camperas',
        nameProduct: 'Campera Macowens Inflada Clásica',
        price: 25999,
        urlImage: campera7,
        quantity: 1,
    },
    {
        id: 16,
        categoria: 'camperas',
        nameProduct: 'Campera Con Capucha Arinsal',
        price: 28900,
        urlImage: campera8,
        quantity: 1,
    },
    {
        id: 17,
        categoria: 'camperas',
        nameProduct: 'Campera Ghy Polo Club',
        price: 21900,
        urlImage: campera9,
        quantity: 1,
    },
    {
        id: 18,
        categoria: 'camperas',
        nameProduct: 'Campera Inflable Pluma Y Piel',
        price: 26000,
        urlImage: campera10,
        quantity: 1,
    },
    {
        id: 19,
        categoria: 'camperas',
        nameProduct: 'Campera G6 Con Corderito',
        price: 19999,
        urlImage: campera11,
        quantity: 1,
    },
    {
        id: 20,
        categoria: 'camperas',
        nameProduct: 'Campera Parka Con Corderito',
        price: 18999,
        urlImage: campera12,
        quantity: 1,
    },
    {
        id: 21,
        categoria: 'camperas',
        nameProduct: 'Campera Puma Classics',
        price: 46999,
        urlImage: campera13,
        quantity: 1,
    },
];

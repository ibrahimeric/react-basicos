// Importamos las imagenes que vamos a utilizar
import air_jordan1 from '../img/air_jordan1.jpg';
import short_boca from '../img/short_boca.webp'
import nike_airmax97 from '../img/nike_airmax97.jpg'
import short_adidas from '../img/short adidas.webp'
import short_nike from '../img/short nike.png'
import campera_nike from '../img/campera_nike.jpg'
import adidas_dayjogger from '../img/adidas_dayjogger.jpg'
import chaleco_columbia from '../img/chaleco_hombre_columbia.webp'

// CAMPERAS
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


// PANTALONES
import pantalon01 from '../img/Pantalones/pantalon01.webp'
import pantalon02 from '../img/Pantalones/pantalon02.webp'
import pantalon03 from '../img/Pantalones/pantalon03.webp'
import pantalon04 from '../img/Pantalones/pantalon04.webp'
import pantalon05 from '../img/Pantalones/pantalon05.webp'
import pantalon06 from '../img/Pantalones/pantalon06.webp'
import pantalon07 from '../img/Pantalones/pantalon07.webp'
import pantalon08 from '../img/Pantalones/pantalon08.webp'
import pantalon09 from '../img/Pantalones/pantalon09.webp'
import pantalon10 from '../img/Pantalones/pantalon10.webp'
import pantalon11 from '../img/Pantalones/pantalon11.webp'
import pantalon12 from '../img/Pantalones/pantalon12.webp'
import pantalon13 from '../img/Pantalones/pantalon13.webp'
import pantalon14 from '../img/Pantalones/pantalon14.webp'
import pantalon15 from '../img/Pantalones/pantalon15.webp'
import pantalon16 from '../img/Pantalones/pantalon16.webp'
import pantalon17 from '../img/Pantalones/pantalon17.webp'
import pantalon18 from '../img/Pantalones/pantalon18.webp'
import pantalon19 from '../img/Pantalones/pantalon19.webp'
import pantalon20 from '../img/Pantalones/pantalon20.webp'


//REMERAS
import remera1 from '../img/imgRemeras/remera1.webp'
import remera2 from '../img/imgRemeras/remera2.webp'
import remera3 from '../img/imgRemeras/remera3.jpeg'
import remera4 from '../img/imgRemeras/remera4.webp'
import remera5 from '../img/imgRemeras/remera5.webp'
import remera6 from '../img/imgRemeras/remera6.jpg'
import remera7 from '../img/imgRemeras/remera7.jpg'
import remera8 from '../img/imgRemeras/remera8.jpg'
import remera9 from '../img/imgRemeras/remera9.jpg'


export const data = [
    {
        // Aqui indicamos el id que debe ser siempre distinto ya que con ese numero sabemos cual producto seleccionó el usuario y debemos 
        // agregar al carrito. De lo contrario ocurriran errores.
        id: 1,
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
        id: 2,
        categoria: 'ofertas zapatillas',
        nameProduct: 'NIKE AIRMAX 97',
        price: 37000,
        urlImage: nike_airmax97,
        quantity: 1,
    },
    {
        id: 3,
        categoria: 'ofertas short',
        nameProduct: 'Short Adidas BOCA',
        price: 12002,
        urlImage: short_boca,
        quantity: 1,
    },
    {
        id: 4,
        categoria: 'ofertas shorts',
        nameProduct: 'Short ADIDAS',
        price: 7303,
        urlImage: short_adidas,
        quantity: 1,
    },
    {
        id: 5,
        categoria: 'ofertas shorts',
        nameProduct: 'Short NIKE',
        price: 4203,
        urlImage: short_nike,
        quantity: 1,
    },
    {
        id: 6,
        categoria: 'ofertas camperas',
        nameProduct: 'Campera NIKE', //cola
        price: 10203,
        urlImage: campera_nike,
        quantity: 1,
    },
    {
        id: 7,
        categoria: 'ofertas zapatillas',
        nameProduct: 'Zapatillas ADIDAS',
        price: 15203,
        urlImage: adidas_dayjogger,
        quantity: 1,
    },
    {
        id: 8,
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
    {
        id: 22,
        categoria: 'pantalones',
        nameProduct: 'Pantalón Toledo de gabardina Classic fit',
        price: 29500,
        urlImage: pantalon01,
        quantity: 1,
    },
    {
        id: 23,
        categoria: 'pantalones',
        nameProduct: 'Jogging Den Slim fit',
        price: 24000,
        urlImage: pantalon02,
        quantity: 1,
    },
    {
        id: 24,
        categoria: 'pantalones',
        nameProduct: 'Pantalón Copernico de gabardina Modern fit',
        price: 29500,
        urlImage: pantalon03,
        quantity: 1,
    },
    {
        id: 25,
        categoria: 'pantalones',
        nameProduct: 'Pantalón Copernico de gabardina Modern fit',
        price: 29500,
        urlImage: pantalon04,
        quantity: 1,
    },

    {
        id: 26,
        categoria: 'pantalones',
        nameProduct: 'Jogging Distracter',
        price: 24000,
        urlImage: pantalon05,
        quantity: 1,
    },
    {
        id: 27,
        categoria: 'pantalones',
        nameProduct: 'Pantalón Toledo de gabardina Classic fit',
        price: 29500,
        urlImage: pantalon06,
        quantity: 1,
    },
    {
        id: 28,
        categoria: 'pantalones',
        nameProduct: 'Pantalón Toledo de gabardina Classic fit',
        price: 29500,
        urlImage: pantalon07,
        quantity: 1,
    },
    {
        id: 29,
        categoria: 'pantalones',
        nameProduct: 'Pantalón Abbey de gabardina Classic fit',
        price: 29500,
        urlImage: pantalon08,
        quantity: 1,
    },
    {
        id: 30,
        categoria: 'pantalones',
        nameProduct: 'Pantalón Fulton de gabardina Modern fit',
        price: 29500,
        urlImage: pantalon09,
        quantity: 1,
    },
    {
        id: 31,
        categoria: 'pantalones',
        nameProduct: 'Pantalón Abbey de gabardina Classic fit',
        price: 29500,
        urlImage: pantalon10,
        quantity: 1,
    },
    {
        id: 32,
        categoria: 'pantalones',
        nameProduct: 'Pantalón Krim Pinzado de gabardina Modern fit',
        price: 29500,
        urlImage: pantalon11,
        quantity: 1,
    },
    {
        id: 33,
        categoria: 'pantalones',
        nameProduct: 'Pantalón Krim Pinzado de gabardina Modern fit',
        price: 29500,
        urlImage: pantalon12,
        quantity: 1,
    },
    {
        id: 34,
        categoria: 'pantalones',
        nameProduct: 'Pantalón Copernico de gabardina Modern fit',
        price: 29500,
        urlImage: pantalon13,
        quantity: 1,
    },
    {
        id: 35,
        categoria: 'pantalones',
        nameProduct: 'Pantalón Zumo de gabardins Slim fit',
        price: 29500,
        urlImage: pantalon14,
        quantity: 1,
    },
    {
        id: 36,
        categoria: 'pantalones',
        nameProduct: 'Pantalón Krim Pinzado de gabardina Modern fit',
        price: 29500,
        urlImage: pantalon15,
        quantity: 1,
    },
    {
        id: 37,
        categoria: 'pantalones',
        nameProduct: 'Pantalón Buster Modern Fit',
        price: 22000,
        urlImage: pantalon16,
        quantity: 1,
    },
    {
        id: 38,
        categoria: 'pantalones',
        nameProduct: 'Pantalón Krim Pinzado de gabardina Modern fit',
        price: 29500,
        urlImage: pantalon17,
        quantity: 1,
    },
    {
        id: 39,
        categoria: 'pantalones',
        nameProduct: 'Pantalón Fulton de gabardina Modern fit',
        price: 29500,
        urlImage: pantalon18,
        quantity: 1,
    },
    {
        id: 40,
        categoria: 'pantalones',
        nameProduct: 'Jogging Ben Modern Fit',
        price: 24000,
        urlImage: pantalon19,
        quantity: 1,
    },
    {
        id: 41,
        categoria: 'pantalones',
        nameProduct: 'Jogging Distracter',
        price: 24000,
        urlImage: pantalon20,
        quantity: 1,
    },
    {
        id: 42,
        categoria: 'remeras',
        nameProduct: 'Remera Nike Hombre NSW Tee Diy Futura Negro',
        price: 4200,
        urlImage: remera1,
        quantity: 1,
    },
    {
        id: 43,
        categoria: 'remeras',
        nameProduct: 'REMERA MANGA LARGA QUIKSILVER TOWN HALL HOMBRE',
        price: 4200,
        urlImage: remera2,
        quantity: 1,
    },
    {
        id: 44,
        categoria: 'remeras',
        nameProduct: 'Remera Lisa Modal Hombre',
        price: 5200,
        urlImage: remera3,
        quantity: 1,
    },
    {
        id: 45,
        categoria: 'remeras',
        nameProduct: 'REMERON MEGA [ NEGRO ]',
        price: 3200,
        urlImage: remera4,
        quantity: 1,
    },
    {
        id: 46,
        categoria: 'remeras',
        nameProduct: 'REMERA OVERSIZE HOMBRE REMERON ALGODÓN MANGA CORTA PREMIUM',
        price: 6200,
        urlImage: remera5,
        quantity: 1,
    },
    {
        id: 47,
        categoria: 'remeras',
        nameProduct: 'Remera Oversize | KTK',
        price: 4600,
        urlImage: remera6,
        quantity: 1,
    },
    {
        id: 48,
        categoria: 'remeras',
        nameProduct: 'Remeras Oversize de Hombre | Burn',
        price: 4900,
        urlImage: remera7,
        quantity: 1,
    },
    {
        id: 49,
        categoria: 'remeras',
        nameProduct: 'REMERA OVERSIZE LISA',
        price: 5100,
        urlImage: remera8,
        quantity: 1,
    },
    {
        id: 50,
        categoria: 'remeras',
        nameProduct: 'Remera de hombre THRASHER GOLD-ROSA',
        price: 4600,
        urlImage: remera9,
        quantity: 1,
    },
   
    
    
];

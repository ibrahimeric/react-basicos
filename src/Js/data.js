// Importamos las imagenes que vamos a utilizar
import air_jordan1 from '../img/air_jordan1.jpg';
// Aqui creamos cada uno de los productos que queremos que se muestren en la pagina.
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
        nameProduct: 'AIR JORDAN 2',
        price: 1201,
        urlImage: air_jordan1,
        quantity: 1,
    },
    {
        id:3,
        nameProduct: 'AIR JORDAN 3',
        price: 1202,
        urlImage: air_jordan1,
        quantity: 1,
    },
    {
        id:4,
        nameProduct: 'AIR JORDAN 4',
        price: 1203,
        urlImage: air_jordan1,
        quantity: 1,
    },
];
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import Slider from './Slider';
import Body from './Body';
import Footer from './Footer';
import { useState } from 'react';
// import Tp1 from './Tp1';


function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <div className="App">
      {/* <Tp1></Tp1> */}

      <Header allProducts = {allProducts} 
      setAllProducts = {setAllProducts} 
      total = {total} 
      setTotal = {setTotal} 
      countProducts = {countProducts} 
      setCountProducts = {setCountProducts}></Header>
      <Slider></Slider>
      <Body allProducts = {allProducts} 
      setAllProducts = {setAllProducts} 
      total = {total} 
      setTotal = {setTotal} 
      countProducts = {countProducts} 
      setCountProducts = {setCountProducts}></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;

import '../Styles/App.css';
import Header from './Header'
import Saludar from './Saludar';
import Slider from './Slider';
import Body from './Body';
import Footer from './Footer';
import { useState } from 'react';


function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <div className="App">
      <Header allProducts = {allProducts} 
      setAllProducts = {setAllProducts} 
      total = {total} 
      setTotal = {setTotal} 
      countProducts = {countProducts} 
      setCountProducts = {setCountProducts}></Header>
      <Saludar></Saludar>
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

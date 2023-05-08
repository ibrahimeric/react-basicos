import '../Styles/App.css';
import Header from './Header'
import Saludar from './Saludar';
import Slider from './Slider';
import Body from './Body';
import Footer from './Footer';
import { useState } from 'react'; /* Hooks */



function App() {

  const [contador, setContador] = useState(0)

  const [nombre, setNombre] = useState("")
  
  
  return (
    <div className="App">
      <Header>
        {/* pasar props */}
        nombre={nombre}
        setNombre={setNombre}
      </Header>
      <Saludar></Saludar>
      <Slider></Slider>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;

import '../Styles/App.css';
import Header from './Header'
import Saludar from './Saludar';
import Slider from './Slider';
import Body from './Body';
import Footer from './Footer';




function App() {
  const nro1 = 15 /* codigo javascript */
  
  
  return (
    <div className="App">
      <Header></Header>
      <Saludar></Saludar>
      <Slider></Slider>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;

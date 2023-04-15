import "./App.css";
import Header from "./components/header/header";
import Hero from "./components/Hero/Hero";
import Footer from './components/Footer/Footer'
import Products from "./components/Products/Products";
import Slider from "./components/Slider/Slider";
import Testimonals from "./components/Testimonals/Testimonals";
import Virtual from "./components/Virtual/Virtual";
function App() {
  return (
    <div className="App">
     <Header />
     <Hero />
     <Slider />
     <Virtual />
     <Products />
     <Testimonals />
     <Footer />
    </div>
  );
}

export default App;

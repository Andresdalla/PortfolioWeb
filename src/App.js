import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SobreMi from "./components/SobreMi";
import Skills from "./components/Skills";
import MiTrabajo from "./components/MiTrabajo";
import Contacto from "./components/Contacto"

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <SobreMi/>
      <div name='skills' className='w-full h-screen bg-[#fffffd]' style={{ marginBottom: '50px' }}>
        <Skills/>
      </div>
      <div name='trabajos' className='w-full md:h-screen bg-[#fffffd]' style={{ marginTop: '50px' }}>
        <MiTrabajo/>
      </div>
      <Contacto/>
    </div>
  );
}

export default App;

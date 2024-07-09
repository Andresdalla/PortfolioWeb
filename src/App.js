import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SobreMi from "./components/SobreMi";
import Skills from "./components/Skills";
import MiTrabajo from "./components/MiTrabajo";
import Contacto from "./components/Contacto"
import NuevoSobreMi from './components/NuevoSobreMi';
import NuevoMiTrabajo from './components/NuevoMiTrabajo';
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      {/* <SobreMi/> */}
      <NuevoSobreMi/>
      <div name='skills' className='w-full h-screen bg-[#fffffd]' style={{ marginBottom: '200px' }}>
        <Skills/>
      </div>
      <div name='trabajos' className='w-full md:h-screen bg-[#fffffd]' style={{ marginTop: '200px' }}>
        {/* <MiTrabajo/> */}
        <NuevoMiTrabajo/>
      </div>
      <div name='contacto' className='w-full md:h-screen bg-[#fffffd]' style={{ marginTop: '200px' }}>
        <Contacto/>
      </div>
    </div>
  );
}

export default App;

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
      <Skills/>
      <MiTrabajo/>
      <Contacto/>
    </div>
  );
}

export default App;

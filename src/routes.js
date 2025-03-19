import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicial from "./paginas/Inicial";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Página não encontrada!</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

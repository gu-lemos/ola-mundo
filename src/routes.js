import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicial from "./paginas/Inicial";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import SubirPagina from "./componentes/SubirPagina/index";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu />
    <SubirPagina /> 
      <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicial />} />
            <Route path="sobremim" element={<SobreMim />} />
          </Route>

          <Route path="posts/:id/*" element={<Post />} />
          <Route path="*" element={<NaoEncontrada />}/>
        </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;

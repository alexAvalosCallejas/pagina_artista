/* Router y nav */

import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from "react-router-dom";

/*Contenido*/

import { VideosMusicales } from "./quinta_pagina/VideosMusicales";
import { Creditos } from "./sexta_pagina/Creditos";
import { MyaLive } from "./primera_pagina/MyaLive";
import { ImagenesMya } from "./tercera_pagina/ImagenesMya";
import { NosotrosMya } from "./cuarta_pagina/NosotrosMya";
import { Integrantes } from "./septima_pagina/Integrantes";
import { Mensajes } from "./octava_pagina/Mensajes";
import { Navegador } from "./componentes/Navegador";
import { Inicio } from "./segunda pagina/Inicio";
import { SuenaMya } from "./novena_pagina/SuenaMya";
import { Hoy } from "./decima_pagina/Hoy";

export const App = () => {
  return (
    <>
      <Router>
        <Navegador />
        <Routes>
          <Route path="*" element={<Inicio />}></Route>
          <Route path="/MYALIVE" element={<MyaLive />}></Route>
          <Route path="/VideosMusicales" element={<VideosMusicales />}></Route>
          <Route path="/SuenaMya" element={<SuenaMya />}></Route>
          <Route path="/Hoy" element={<Hoy />}></Route>
          <Route path="/NosotrosMya" element={<NosotrosMya />}></Route>
          <Route path="/ImagenesMya" element={<ImagenesMya />}></Route>
          <Route path="/Integrantes" element={<Integrantes />}></Route>
          <Route path="/Mensajes" element={<Mensajes />}></Route>
          <Route path="/Creditos" element={<Creditos />}></Route>
        </Routes>
      </Router>
    </>
  );
};

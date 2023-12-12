import React from "react";
import ReactDOM from "react-dom/client";
import "./mainStyles.css";
import { Navegador } from "./componentes/Navegador";
import { Footer } from "./componentes/Footer";
/*Contenido*/

import { VideosMusicales } from "./quinta_pagina/VideosMusicales";
import { Creditos } from "./sexta_pagina/Creditos";
import { Inicio } from "./segunda pagina/Inicio";
import { MyaLive } from "./primera_pagina/MyaLive";
import { ImagenesMya } from "./tercera_pagina/ImagenesMya";
import { NosotrosMya } from "./cuarta_pagina/NosotrosMya";
import { Integrantes } from "./septima_pagina/Integrantes";
import { Mensajes } from "./octava_pagina/Mensajes";
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Router>
      <Navegador />
    <Routes>
      <Route path="/inicio" element={<Inicio/>}></Route>
      <Route path="/MYALIVE" element={<MyaLive/>}></Route>
      <Route path="/VideosMusicales" element={<VideosMusicales/>}></Route>
      <Route path="/NosotrosMya" element={<NosotrosMya/>}></Route>
      <Route path="/ImagenesMya" element={<ImagenesMya/>}></Route>
      <Route path="/Integrantes" element={<Integrantes/>}></Route>
      <Route path="/Mensajes" element={<Mensajes/>}></Route>
      <Route path="/Creditos" element={<Creditos/>}></Route>
    </Routes>
  </Router>
    <Footer />
  </React.StrictMode>
);

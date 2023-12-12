import React from "react";
import ReactDOM from "react-dom/client";
import "./mainStyles.css";
import { Footer } from "./componentes/Footer";
import {App} from "./App";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
    <Footer />
  </React.StrictMode>
);

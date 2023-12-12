import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "../estilosComponentes/navBar.css";
import {Link, Outlet} from 'react-router-dom'

import logoPagina from '../imagenes/logoMya.jpg';

export const Navegador = () => {
  return (
    <>
    <nav className="navegador-cont z-3 p-1 fw-bold navbar navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="justify-content-center collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="align-items-center lista navbar-nav">
            <li className="nav-item">
              <a className="nav-link active text-light a-link" aria-current="page" href="#">
                <Link to="/Inicio">{"Inicio"}</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light a-link" href="#">
                <Link to="/MyaLive">{"MYALIVE"}</Link>
              </a>
            </li>
            <li className="nav-item text-light">
            <a className="nav-link a-link">
            <img className="navbar-brand logo" src={logoPagina}></img>
            </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light a-link" href="#">
              <Link to={"/VideosMusicales"}>{"Videos"}</Link>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light a-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Más...
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
              <Link to={"SuenaMya"}>{"SUENA MYA: Album"}</Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
              <Link to={"Hoy"}>{"Hoy: Album"}</Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
              <Link to={"NosotrosMya"}>{"Nosotros"}</Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
              <Link to={"ImagenesMya"}>{"Imagenes"}</Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
              <Link to={"Integrantes"}>{"Integrantes"}</Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
              <Link to={"Mensajes"}>{"Mensajes"}</Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
              <Link to={"Creditos"}>{"Creditos"}</Link>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Outlet/>
    </>
  );
};

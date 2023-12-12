import "bootstrap-icons/font/bootstrap-icons.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "../estilosComponentes/footer.css";
import logo from "../imagenes/logoMya.jpg";

export const Footer = () => {
  return (
    <>
      <div className="container-fluid position-absolute">
        <div className="footer-cont d-flex flex-column row bg-dark text-white">
          <div className="footer-social col-sm-12">
            <h5>SIGUENOS</h5>
            <div className="social-icons">
              <a href="https://www.tiktok.com/@myamusica" target="_blank"><i className="bi-tiktok"></i></a>
              <a href="https://www.instagram.com/mya_musica/" target="_blank"><i className="bi-instagram"></i></a>
              <a href="https://www.youtube.com/@MYAOficial" target="_blank"><i className="bi-youtube"></i></a>
            </div>
          </div>
          <div className="footer-logo col-sm-12">
            <img src={logo}></img>
          </div>
          <div className="footer-desc col-sm-12">
            <p>Alex Avalos Callejas &#169; 2023</p>
          </div>
        </div>
      </div>
    </>
  );
};

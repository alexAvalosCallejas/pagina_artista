import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "../estilosComponentes/carrusel-comp.css";

export const CarruselComp = ({idCarru, img1, title1, img2, title2, img3, title3 }) => {
  let idTarget = idCarru;
  return (
    <div id={idCarru} className="carrusel-IMG carousel slide m-auto">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target={`#${idTarget}`}
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target={`#${idTarget}`}
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target={`#${idTarget}`}
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carrusel-box w-100 carousel-inner ">
        <div className="carrusel-box-cont carousel-item active">
          <img src={img1} className="d-block w-100" alt="..."></img>
          <div className="carousel-caption d-none d-md-block">
            <h3>{title1}</h3>
          </div>
        </div>
        <div className="carrusel-box-cont carousel-item">
          <img src={img2} className="d-block w-100" alt="..."></img>
          <div className="carousel-caption d-none d-md-block">
            <h3>{title2}</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="..."></img>
          <div className="carousel-caption d-none d-md-block">
            <h3>{title3}</h3>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${idTarget}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${idTarget}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

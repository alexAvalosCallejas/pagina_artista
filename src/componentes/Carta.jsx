import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import '../estilosComponentes/carta.css'

export const Carta = ({img, title, description, red, txtEnlace, subtitulo="MYA LIVE:"}) => {
  return (
    <>
    <div className="carta card m-auto p-1 text-light">
      <div className="row g-0">
        <div className="estilo-general col-lg-5">
          <img src={img} className="img-fluid rounded-start"></img>
        </div>
        <div className="estilo-general col-lg-7 ">
          <div className="card-body">
            <h3 className="card-title">{subtitulo} {title}</h3>
            <p className="card-text">
              {description}
            </p>
            <a className="card-text" href={red} target="_blank">{txtEnlace}</a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

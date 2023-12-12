import "../estilosPaginas/mensajes.css";

const mensaje = function () {
  let $contenedor = document.getElementById("mensajes");
  let $nombre = document.createElement("h3");
  let contenidoNombre = document.getElementById("nombre").value
  $nombre.innerHTML = contenidoNombre;
  let $mensajeCont = document.createElement("h5");
  let contenidoMensaje = document.getElementById("mensaje").value;
  $mensajeCont.innerText = contenidoMensaje;
  let mensajesDiv = document.createElement("div");
  /* bg-dark text-light p-3 */
  mensajesDiv.classList.add("bg-dark");
  mensajesDiv.classList.add("text-light");
  mensajesDiv.classList.add("p-3");
  mensajesDiv.style.overflow="hidden";
  mensajesDiv.append($nombre);
  mensajesDiv.append($mensajeCont);
  $contenedor.append(mensajesDiv);

  document.getElementById("nombre").value = "";
  document.getElementById("mensaje").value = "";
};

export const Mensajes = () => {
  return (
    <>
      <main className="mensaje">
        <header className="mensaje-titulo">
          <h1>ENVIA TU MENSAJE A LOS MYA!!!</h1>
        </header>
        <div className="cont-form container-fluid">
          <div className="row">
            <article className="mensaje-formulario col-sm-12 col-lg-8">
              <form className="formulario bg-dark">
                <input
                  type="text"
                  id="nombre"
                  placeholder="Ingresa tu nombre"
                />
                <textarea
                  id="mensaje"
                  placeholder="Escribe un mensaje"
                ></textarea>
                <button type="button" onClick={mensaje}>
                  Enviar
                </button>
              </form>
            </article>
            <article className="mensaje-formulario col-sm-12 col-lg-4">
              <h2>Ultimos mensajes:</h2>
              <div id="mensajes" className="mensajes-box"></div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

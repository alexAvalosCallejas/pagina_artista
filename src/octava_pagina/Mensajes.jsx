import "../estilosPaginas/mensajes.css";

const mensaje = function () {
  let $contenidoComentarios = document.getElementById("mensajes-box");
  let $contNombre = document.createElement("H3");
  let $contMensaje = document.createElement("P");
  $contMensaje.style.display = "block";
  let $comentarioBox = document.createElement("DIV");
  $comentarioBox.style.margin = "1em 0";
  $comentarioBox.classList.add("bg-dark");
  $comentarioBox.classList.add("estilo-caja-comentario");
  $contNombre.innerHTML += document.getElementById("nombre").value;
  $contMensaje.innerHTML += document.getElementById("mensaje").value;
  /*ingresar contenido */
  $comentarioBox.append($contNombre);
  $comentarioBox.append($contMensaje);
  /*ingresar contenido al div principal*/
  $contenidoComentarios.append($comentarioBox);

  /*Vaciar input*/
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
            <article className="mensaje-formulario p-4 col-sm-12 col-lg-4">
              <h2>Ultimos mensajes:</h2>
              <div id="mensajes-box" className="mensajes-box"></div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

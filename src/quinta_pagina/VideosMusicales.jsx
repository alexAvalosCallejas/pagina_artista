import "../estilosPaginas/videosMusicales.css";

export const VideosMusicales = () => {
  return (
    <>
    <main className="musical">
    <header className="musical-titulo">
       <h1>VIDEOS MUSICALES</h1> 
    </header>
      <div className="cont-vid container-fluid">
        <div className="container-box row">
          <div className="container-video col-sm-12 col-md-6 col-lg-4">
            <iframe
              className="w-100"
              src="https://www.youtube.com/embed/6A34iK9SZls?si=pUMUaV1DAnjXZwl_"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="container-video col-sm-12 col-md-6 col-lg-4">
          <iframe className="w-100" src="https://www.youtube.com/embed/K-90ECdU9Wc?si=NFG1Vsx_ga3D7esi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="container-video col-sm-12 col-md-6 col-lg-4">
          <iframe className="w-100" src="https://www.youtube.com/embed/vh-7O8dXIlU?si=75r8aq7jtnebA58G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <button type="button" className="d-block m-auto boton-videos btn btn-success">
        <a className="link-videos text-light" href="https://www.youtube.com/channel/UCojQL7h1Upilz-uD4ByK6SQ" target="_blank">Ver más videos</a>
      </button>
    </main>
    </>
  );
};

import '../estilosPaginas/inicio.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import portada1 from '../imagenes/imagenes-inicio/dos-cincuenta.jpg';
import portada2 from '../imagenes/imagenes-inicio/nunca-soltamos.jpg';
import portada3 from '../imagenes/imagenes-inicio/taza-taza.jpeg';


export const Inicio = () => {
  return (
    <>
    <main className='estilo-general main-inicio'>
        <h1 className='main-title'><span className='main-title-beg'>Bienvenidos a...</span><br/><span className='main-title-mess'>MYA_oficial</span></h1>
    </main>
    <article className='musica-cont'>
        <section className='cont-canciones'>
            <h2 className='canciones-title'>Algunos éxitos</h2>
            <div className='canciones-img-cont'>
                <div className='cont-img'>
                <img src={portada1}></img></div>
                <div className='cont-img'>
                <img src={portada2}></img></div>
                <div className='cont-img'>
                <img src={portada3}></img></div>
            </div>
        </section>
    </article>
    <div className='article-tour container-fluid bg-success text-light p-5'>
        <div className='tour-cont row'>
            <div className='tour-logo col-md-12 col-lg-4 d-flex flex-column justify-content-center align-items-center'>
                <h2 className='logo-title'>TOUR</h2>
                <h3>Ven y canta con nosotros!!!</h3>
                <p>LUNA PARK-22 de diciembre/<span className='estado'>sold-out</span></p>
            </div>
            <div className='tour-desc col-md-12 col-lg-8 d-flex flex-column justify-content-center align-items-center'>
                <h2 className='desc-title'>No se pudieron avistar tours en los próximos meses</h2>
                <button className='desc-button' type='button'>Regresa pronto</button>
            </div>
        </div>
    </div>
    </>

  )
}

import '../estilosPaginas/creditos.css';
import logoPagina from '../imagenes/logoMya.jpg';

export const Creditos = () => {
  return (
    <main className='creditos'>
        <header className='creditos-header'>
            <h1>CREDITOS</h1>
        </header>
        <article className='creditos-desc'>
            <section className='desc-cont'>
                <h2>Alex Avalos Callejas</h2>
                <h3>10911541 LP</h3>
            </section>
        </article>
        <picture className='logo-creditos'>
            <img src={logoPagina}></img>
        </picture>
    </main>
  )
}

import '../estilosPaginas/nosotros.css';
import imagenLogo from '../imagenes/logoMya.jpg';

export const NosotrosMya = () => {
  return (
    <>
    <main className="nosotros">
      <heade className="nosotros-titulo">
        <h1>MYA: RECORRIDO</h1>
      </heade>
      <article className="nosotros-articulo row">
        <section className="nos-origenes">
          <p>En 2013, Máximo Espíndola y Agustín Bernasconi, luego de realizar un casting, fueron seleccionados por Cris Morena para integrar el elenco principal de la serie juvenil Aliados emitida por Telefe, allí Espíndola interpretó a Gopal, un ser de luz que viene a salvar Manuel, interpretado por Bernasconi, quién sufría bullying por parte de sus compañeros del colegio por cantar. De esa forma los actores formaron una amistad y al instante, se fueron a vivir juntos en un departamento, el cual también lo compartieron con el youtuber Julián Serrano y el actor Eliseo Rentería por tres años. Durante ese tiempo, se juntaban a grabar versiones de canciones de otros artistas musicales para subirlos a YouTube, lo cual comenzó a tener repercusión entre los fanes de las serie; inclusive llevó a que la discográfica Sony Music Argentina se interesara por ellos y de esa forma firmaron un contrato en 2017 para comenzar con su carrera musical.</p>
        </section>
        <section className="nos-album">
          <p>El 22 de agosto de 2017, lanzaron al mercado su primer sencillo «Amor prohibido». La canción fue grabada en Miami, mezclada en Los Ángeles y masterizada en Nueva York bajo la producción de Rafael Arcaute y Nicolás Cotton. Asimismo, obtuvo reconocimientos con una nominación al premio Martín Fierro Digital como mejor vídeo musical del año. A principios de 2018, lanzaron «Día y noche» como su segundo sencillo, el cual fue coescrito con Rafael Arcaute y Andy Clay, teniendo a Mosty como el encargado de masterizar y mezclar. El videoclip fue filmado en Miami y fue dirigido por Joaquín Cambre, la canción fue descrita como un «ritmo fresco y urbano».5 Meses después, lanzaron su tercer sencillo titulado «A escondidas», cuyo vídeo musical estuvo dirigido por Juan Ripari, fue coescrita con Juanfran Parra y Rafael Vergara y mezclada y masterizada por Nicolás Cotton.</p>
        </section>
        <section className="nos-actualidad">
          <p>A principios de 2020, el dúo afirmó que su segundo álbum de estudio o posiblemente un EP ya estaba en desarrollo. Es así como el 11 de marzo de ese año junto a la cantante argentina Emilia Mernes, lanzaron «Histeriqueo» el primer sencillo de su próximo álbum y el cual se posicionó en el puesto 10 de la lista Monitor Latino Argentina Top 20 Nacional. Poco después, en mayo de 2020, lanzaron su segundo sencillo titulado «Una y mil veces» en colaboración con el dúo venezolano Mau y Ricky, el cual alcanzó el puesto 96 de lista Billboard Argentina Hot 100 y permaneció por 2 semanas. En agosto del mismo año, MYA lanzó «25 noches» en colaboración nuevamente con el cantante español Abraham Mateo. En septiembre de ese año, el dúo lanzó el sencillo «2:50», el cual alcanzó la posición número 21 en el ranking Billboard Argentina Hot 100.</p>
        </section>
        <picture className='nos-imagen'>
          <img src={imagenLogo}></img>
        </picture>
      </article>
    </main>
    </>
  )
}

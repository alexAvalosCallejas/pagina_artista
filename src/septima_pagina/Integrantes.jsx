import { Carta } from "../componentes/Carta";
import '../estilosPaginas/integrantes.css'
/* Imagenes */
import maxEspindola from "../imagenes/imagenes-integrantes/maxi-espindola-img1.jpg";
import agusBernasconi from "../imagenes/imagenes-integrantes/agus-bernasconi-img1.jpg";

const primerIntegrante = {
  img: maxEspindola,
  titulo: "Maximo Espindola",
  descripcion:
    "Máximo Eduardo Espíndola (3 de diciembre de 1994; San Miguel de Tucumán, Tucumán, Argentina) más conocido como Maxi Espíndola es actor y cantante, hijo de Eduardo Espíndola y Priscila Regginato, una bailarina y reconocida directora de escuelas de danzas en Tucumán, y tiene 7 hermanos. Estudió en el colegio Pablo Apóstol de Yerba Buena. Desde temprana edad demostró interés por la música, ya que a los 11 años participó del reality Mini Music (2005) emitido dentro del programa de Susana Giménez donde cantó un tema de Leonardo Favio y se convirtió en uno de los 5 ganadores que tuvieron como premio grabar un disco bajo el sello discográfico EMI",
};

const segundoIntegrante = {
    img: agusBernasconi,
    titulo: 'Agustin Bernasconi',
    descripcion: "Agustín Bernasconi Aspitarte (15 de octubre de 1996; Río Tercero, Córdoba, Argentina) es actor y cantante, hijo de Diego Bernasconi y Claudia Aspitarte, y tiene un hermano mayor llamado Santiago Bernasconi Aspitarte, si bien nació en Río Tercero, Agustín Bernasconi se crio y vivió en Villa Rumipal. Su primera aparición en televisión, fue en Soñando por cantar, el mismo reality en el cual participó Máximo Espíndola, que al igual que él logró conseguir elogios del jurado, ya que ganó una beca para estudiar en la Escuela Musical de Valeria Lynch, donde asistió y se formó por meses; y a su vez tuvo una aparición en La cocina del show."
}

export const Integrantes = () => {
  return (
    <>
    <main className="integrantes">
      <header className="titulo-integrantes">
        <h1>MYA</h1>
      </header>
      <article>
        <Carta img={primerIntegrante.img} subtitulo={primerIntegrante.titulo} description={primerIntegrante.descripcion}/>
      </article>
      <article>
        <Carta img={segundoIntegrante.img} subtitulo={segundoIntegrante.titulo} description={segundoIntegrante.descripcion}/>
      </article>
    </main>
    </>
  );
};

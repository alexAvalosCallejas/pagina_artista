import { Carta } from "../componentes/Carta";

import '../estilosPaginas/myaLive.css';
import myaP1 from '../imagenes/mya-p1.jpeg';
import myaP2 from '../imagenes/mya-p2.jpg';
import myaP3 from '../imagenes/mya-p3.jpeg';
import myaP4 from '../imagenes/mya.jpg'


const canciones = {
  p1: {
    titulo:'Chanel de coco',
    descripcion:"MYA ft. Rusherking lanzan uno de los temas del verano que puedes dedicar a esa persona con la cual deseas pasar un día en la playa y pasar un día inolvidable.",
    redireccion: 'https://youtu.be/LlUlMnXSl6k?si=nsCZkmLKtx04tiZW'
  },
  p2:{
    titulo:'Corazón guerrero',
    descripcion:"MYA ft. La Konga, las dos bandas argentinas del momento, nos regalan esta hermosa canción que puede ser para aquellas personas que sufrieron una ruptura y desean seguir adelante sin su pareja. Pero seguir adelante requiere de un corazón guerrero.",
    redireccion:'https://youtu.be/52Ft088wpHo?si=2nJcfNnC2kX_Dpba'
  },
  p3:{
    titulo:'Qué pasará',
    descripcion:"MYA ft. Dread Mar I, después del 'break up' en una relación la superación es un paso díficil, por esa razón, no sabemos qué pasará en un futuro sin nuestra pareja.",
    redireccion:'https://youtu.be/tEpkALVyUV0?si=Nn9wGYbjGhKFdecz'
  },
  p4:{
    titulo:'Prisionero',
    descripcion:"MYA ft. Ulises Bueno, nos hacen entender que la superación no pasa de la noche a la mañana, sino debemos esperar un tiempo; pero ese tiempo nos hace querer retroceder. y nos sentimos prisioneros de una cárcel pasajera.",
    redireccion:'https://youtu.be/FuytA52a5Z0?si=eEYuu0v70R1uBxVS'
  }
};

export const MyaLive = () => {
  return (
    <>
      <section className="estilo-general portadas portada-principal">
        <h2>PRISIONERO</h2>
      </section>
      <section className="estilo-general primera-seccion">
        <Carta img={myaP4} title={canciones.p4.titulo}
        description={canciones.p4.descripcion} red={canciones.p4.redireccion} txtEnlace={"Ver video"}/>
      </section>
      <section className="estilo-general portadas portada-segunda">
        <h2>QUÉ PASARÁ</h2>
      </section>
      <section className="estilo-general segunda-seccion">
        <Carta img={myaP3} title={canciones.p3.titulo} description={canciones.p3.descripcion} red={canciones.p3.redireccion} txtEnlace={"Ver video"}/>
      </section>
      <section className="estilo-general portadas portada-tercera">
        <h2>CORAZÓN GUERRERO</h2>
      </section>
      <section className="estilo-general tercera-seccion">
        <Carta img={myaP2} title={canciones.p2.titulo} description={canciones.p2.descripcion} red={canciones.p2.redireccion} txtEnlace={"Ver video"}/>
      </section>
      <section className="estilo-general portadas portada-cuarta">
        <h2>CHANEL DE COCO</h2>
      </section>
      <section className="estilo-general cuarta-seccion">
        <Carta img={myaP1} title={canciones.p1.titulo} description={canciones.p1.descripcion} red={canciones.p1.redireccion} txtEnlace={"Ver video"}/>
      </section>
    </>
  );
};

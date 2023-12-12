import { CarruselComp } from "../componentes/CarruselComp";
import cancion1 from "../imagenes/imagenes-imagenesMya/mya-album-hoy.jpeg";
import cancion2 from "../imagenes/imagenes-imagenesMya/mya-suena-mya.jpeg";
import cancion3 from "../imagenes/imagenes-imagenesMya/mya-MYA-live.jpg";
import "../estilosPaginas/imagenesCarrusel.css";
import exitoImg1 from "../imagenes/imagenes-imagenesMya/mya-250.jpeg";
import exitoImg2 from "../imagenes/imagenes-imagenesMya/mya-te-olvidare.jpg";
import exitoImg3 from "../imagenes/imagenes-imagenesMya/mya-bb.jpg";

const datosAlbum = {
  carruselImg1: {
    img: cancion1,
    title: "Album: Hoy",
  },
  carruselImg2: {
    img: cancion2,
    title: "Album: Suena MYA!",
  },
  carruselImg3: {
    img: cancion3,
    title: "Album: MYA LIVE",
  },
};

const datosExitos = {
  exitos1:{
    img: exitoImg1,
    title: "MYA ft. Duki, Tini: 2:50 Remix"
  },
  exitos2:{
    img: exitoImg2,
    title: "MYA ft. Pedro Capó: Te olvidaré"
  }
  ,exitos3:{
    img: exitoImg3,
    title: "MYA ft. Emilia: BB"
  },
}

export const ImagenesMya = () => {
  return (
    <>
      <article className="estilo-articulo album-mya">
        <h2>ALBUMES</h2>
        <CarruselComp idCarru={"albumMya"}
          img1={datosAlbum.carruselImg1.img}
          title1={datosAlbum.carruselImg1.title}
          img2={datosAlbum.carruselImg2.img}
          title2={datosAlbum.carruselImg2.title}
          img3={datosAlbum.carruselImg3.img}
          title3={datosAlbum.carruselImg3.title}
        />
      </article>
      <article className="estilo-articulo exitos-mya">
        <h2>EXITOS MYA!!!</h2>
        <CarruselComp idCarru={"exitosMya"} img1={datosExitos.exitos1.img} img2={datosExitos.exitos2.img} img3={datosExitos.exitos3.img}/> 
      </article>
    </>
  );
};

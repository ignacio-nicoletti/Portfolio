import style from './About.module.css';
import imageProfile from '../../Assets/nacho.png';
const About = () => {
  return (
    <div className={style.contain}>
      <h2>Sobre mi</h2>
      <div className={style.textAndImage}>
        <div className={style.text}>

          <p>
            Mi nombre es Ignacio Nicoletti, soy técnico informático con una gran pasión por la programación. Me apasiona entregar soluciones que agreguen valor a la vida de las personas y al mismo tiempo me desafíen. Mejoré mis habilidades como desarrollador Front-End y Back-End.
          </p>
          <p>
            Cuento con mas de 800 horas de práctica, desde chico siempre me gusto la programación lo cual siempre tengo motivación para perfeccionar mis habilidades y aprender nuevas tecnologías. Me egresé del Bootcamp SoyHenry obteniendo como logro que el proyecto grupal sea considerado uno de los mejores entre las dos cohortes.
          </p>
          <p>
            Soy una persona dedicada que persigue hacer realidad sus sueños, trabajadora y orientada a resultados, busco siempre alcanzar mi mejor versión.
          </p>
        </div>
        <div className={style.image}>
          <img src={imageProfile} alt="" />
        </div>
      </div>
      <div className={style.ability}>
        <h3>Estas son mis principales habilidades:</h3>
      </div>
    </div>
  );
};
export default About;

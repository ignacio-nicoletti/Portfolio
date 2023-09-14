import style from "./Header.module.css"

const Header = () => {
  return (
    <div className={style.contain}>
        <div className={style.texto}>

      <p>Hola 👋,soy </p>
      <span>Ignacio Nicoletti</span>
      <p className={style.subtitle}>Desarrollador Full Stack</p>
      <p>Formandome profesionalmente día a día y creando proyectos para la comunidad.</p>
      <button>Contacto</button>
        </div>
    </div>
  );
};

export default Header
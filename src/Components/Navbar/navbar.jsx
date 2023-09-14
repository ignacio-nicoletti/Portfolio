import style from './navbar.module.css';
const Navbar = () => {
  return (
    <div className={style.contain}>

      <div>Ignacio Nicoletti</div>
      <div className={style.options}>
        <p>Inicio </p>
        <p>Sobre Mi</p>
        <p>Proyectos</p>
        <p>Contacto</p>
        <button>CV</button>
      </div>

    </div>
  );
};
export default Navbar;

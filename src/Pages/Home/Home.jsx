

import About from '../../Components/About/About';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/navbar';

import style from './Home.module.css';
export const Home = () => {
  return (
    <div className={style.contain}>
      <Navbar />
      <Header />
      <About />
    </div>
  );
};

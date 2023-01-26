import fondo from "../Assets/Fondo.png"

import { Menu } from '../Components/Menu';
import { About } from "./About";

export const Home = () => {
    return (
        <>
            <img src={fondo} alt="Fondo" style={{ width: "100%", height: "100vh" }} />
            <Menu />
            <About/>
        </>
    )


}
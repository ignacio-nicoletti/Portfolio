import fondo from "../Assets/Fondo.png"

import { Menu } from '../Components/Menu';
import { About } from "./About";
import { RenderProjects } from "./RenderProjects";

export const Home = () => {
    return (
        <>
            <img src={fondo} alt="Fondo" style={{ width: "100%", height: "100vh",display:"block" }} />
            <Menu />
            {/* <About/> */}

          {/* <RenderProjects/> */}
        </>
    )


}
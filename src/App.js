
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './Components/About';
import { Home } from './Components/Home';
import { RenderProjects } from './Components/RenderProjects';
function App() {
  return (

    <div>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={ [<Home />, <About />]} />
        <Route path='/projects' element={ [<Home />,  <RenderProjects/>]} />

      
      </Routes>

    </div>

  );
}

export default App;

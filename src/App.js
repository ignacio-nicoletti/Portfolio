
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './Components/About';
import { Home } from './Components/Home';
function App() {
  return (

    <div>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      
      </Routes>

    </div>

  );
}

export default App;

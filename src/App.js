
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Students from './pages/Students';
import Error from './pages/Error';

import NavBar from './components/NavBar';

import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/students" element={<Students />}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

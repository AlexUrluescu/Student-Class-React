
import './App.css';

import {Routes, Route} from "react-router-dom"

// ---------- pages ---------------------------
import Home from './pages/Home';
import About from './pages/About';
import Students from './pages/Students';
import Error from './pages/Error';

// ----------- components -----------------------
import NavBar from './components/NavBar';
import Table from './components/Table';
import FormStudents from './components/FormStudents';


function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}>
            <Route path="/about" element={<Table />}/>
            <Route path="/about/edit" element={<FormStudents />}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;

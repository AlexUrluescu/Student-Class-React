
import './App.css';

import {Routes, Route} from "react-router-dom"

import { useState } from "react"

// ---------- pages ---------------------------
import Home from './pages/Home';
import About from './pages/About';
import Students from './pages/Students';
import Error from './pages/Error';

// ----------- components -----------------------
import NavBar from './components/NavBar';
import Table from './components/Table';
import FormStudents from './components/FormStudents';

const db = [
  {
    id: "100",
    name: "Nistor",
    last_name: "Andrei",
    age: "21",
    city: "Cluj"
  },
  {
    id: "101",
    name: "Nicolau",
    last_name: "Paul",
    age: "31",
    city: "Bucuresti"
  }
]


function App() {

  const [students, setStudents] = useState(db)

  const salutare = () => {
    console.log("Salutare");
  }

  const addStudent = (student) => {
    student.id = Date.now()
    setStudents([...students, student])

    console.log("Student adaugat");
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}>
            <Route path="/about" element={<Table students={students} salutare={salutare}/>}/>
            <Route path="/about/add" element={<FormStudents salutare={salutare} addStudent={addStudent}/>} />
            <Route path="/about/edit/:id" element={<FormStudents salutare={salutare}/>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;

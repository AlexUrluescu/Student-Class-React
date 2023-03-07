
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
  const [edit, setEdit] = useState(null)

  const salutare = () => {
    console.log("Salutare");
  }

  const addStudent = (student) => {

    console.log("se executa addStudent");
    // console.log(student);

    student.id = Date.now()
    // console.log(student);

    setStudents([...students, student])

    // console.log(students);
  }


  const editStudent = (e_Student) => {

    setStudents(students.map((student) => student.id === e_Student.id ? e_Student : student))
    console.log(`Ai editat studentul cu id-ul ${e_Student.id}`);
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}>
            <Route path="/about" element={<Table students={students} salutare={salutare} setEdit={setEdit}/>}/>
            <Route path="/about/add" element={<FormStudents salutare={salutare} setEdit={setEdit} edit={edit} addStudent={addStudent}/>} salutare={salutare} />
          <Route path="/about/edit/:id" element={<FormStudents salutare={salutare} setEdit={setEdit} edit={edit} editStudent={editStudent}/>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;

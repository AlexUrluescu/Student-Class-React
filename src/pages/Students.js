
import Student from "../components/Student";

import "../assets/Students.css"

import { useStudents } from "../hooks/useStudents.js"  // import custom hook


const Students = () => {

    const { students } = useStudents() // custom hook

    return(
        <div>
            <h2>Students</h2>
    
            <div  className="students-container">
                {students.map((student, index) => (
                    <Student key={index} student={student}/>
                ))}
            </div>
            
        </div>
    )
}

export default Students;
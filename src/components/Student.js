
import "../assets/Student.css"

const Student = ({student}) => {
    return(
        <div className="student-card">
            <div>{student.name}</div>
            <div>{student.last_name}</div>
            <div>{student.age}</div>
            <div>{student.city}</div>
        </div>
    )
}

export default Student;
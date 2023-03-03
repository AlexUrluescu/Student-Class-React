
import { useNavigate } from "react-router-dom";

const TableRow = ({student, salutare, setEdit}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        setEdit(student)
        navigate(`/about/edit/${student.id}`)
    }

    return(
        <tr>
            <td>{student.name}</td>
            <td>{student.last_name}</td>
            <td>{student.age}</td>
            <td>{student.city}</td>
            <td><button onClick={handleClick}>Edit</button> <button onClick={salutare}>Delete</button></td>
        </tr>
    )
}

export default TableRow;
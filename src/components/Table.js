
import { Link} from "react-router-dom"
import TableRow from "./TableRow";

const Table = ({salutare, students, setEdit}) => {
    return(
        <div>
            <Link to="/about/add">Add student</Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <TableRow key={index} student={student} salutare={salutare} setEdit={setEdit}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
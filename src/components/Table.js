
import { Link } from "react-router-dom"

const Table = () => {
    return(
        <div>
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
                    <tr>
                        <td>Urluescu</td>
                        <td>Alexandre</td>
                        <td>19</td>
                        <td>Sibiu</td>
                        <td><button><Link to="/about/edit">Edit</Link></button> <button>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;